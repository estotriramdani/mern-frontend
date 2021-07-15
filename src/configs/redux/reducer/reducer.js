import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import globalReducer from "./globalReducer";
const reducer = combineReducers({ homeReducer, globalReducer });

export default reducer;
