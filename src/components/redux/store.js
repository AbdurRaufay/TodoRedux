import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [];

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(...middleware)
// );
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middleware))
);
export default store;
