import {
  LIST_LOAD_REQUEST,
  LIST_LOAD_SUCCESS,
  LIST_LOAD_FAILURE
} from "./Item.types";

const jsonUrl =
  "https://gist.githubusercontent.com/janithl/6bfbd787a0361c170ac760e8fb5ba0fd/raw/a0ffacb7c0fc21a0266371f632cf4107f80362f4/itemlist.json";

export const refreshList = async dispatch => {
  dispatch({ type: LIST_LOAD_REQUEST });

  try {
    const res = await fetch(jsonUrl);
    const jsonData = await res.json();
    dispatch({ type: LIST_LOAD_SUCCESS, payload: jsonData });
  } catch (error) {
    dispatch({ type: LIST_LOAD_FAILURE, error });
  }
};
