import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import ItemList from "./app/ItemList";
import items from "./app/Item.reducers";

// Setup Redux store with Thunks
const reducers = combineReducers({ items });
const store = createStore(reducers, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <ItemList />
  </Provider>
);

export default App;
