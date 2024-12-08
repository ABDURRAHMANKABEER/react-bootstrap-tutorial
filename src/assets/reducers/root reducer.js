import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import usersReducer from "./users reducer";
import weatherReducer from "./weather reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  Users: usersReducer,
  Weather: weatherReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store