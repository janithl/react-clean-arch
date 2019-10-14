import {
  LIST_LOAD_REQUEST,
  LIST_LOAD_SUCCESS,
  LIST_LOAD_FAILURE
} from "./Item.types";
import { ItemServiceImpl } from "../core/usecases/ItemService";
import { ItemRepositoryImpl } from "../core/infrastructure/ItemRepositoryImpl";

export const refreshList = async dispatch => {
  dispatch({ type: LIST_LOAD_REQUEST });

  try {
    const itemRepo = new ItemRepositoryImpl();
    const itemService = new ItemServiceImpl(itemRepo);
    const items = await itemService.GetItems();
    dispatch({ type: LIST_LOAD_SUCCESS, payload: items });
  } catch (error) {
    dispatch({ type: LIST_LOAD_FAILURE, error });
  }
};
