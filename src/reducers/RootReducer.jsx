import tableReducer from "./TableReducer";

import { combineReducers } from "redux";
import userReducers from "./UserReducers";
const rootreducer = combineReducers({
  TableReducer: tableReducer,
  UserReducers: userReducers,
});
export default rootreducer;
