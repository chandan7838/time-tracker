import AddTaskScreen from "./addTaskScreen";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/taskListAction";
const mapStateToProps = (state) => ({
  tagsList: state.tasks.tagsList,
  taskListData: state.tasks.taskListData,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (data) => dispatch(actions.addTask(data)),
    editTask: (data) => dispatch(actions.editTask(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskScreen);
