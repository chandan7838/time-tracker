import { combineReducers } from "redux";
import taskListReducer from "./reducers/taskListReducer";

export default combineReducers({
  tasks: taskListReducer,
});
