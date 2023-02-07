import { createStore } from "redux";
import rootreducer from "./reducers/RootReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
let store = createStore(rootreducer, applyMiddleware(thunk));

export default store;
