import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TimeTrackerScreen from "./timeTrackerScreen";
import * as actions from "../../store/actions/taskListAction";
const mapStateToProps = (state) => ({
  taskListData: state.tasks.taskListData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    startTask: (data) => dispatch(actions.startTask(data)),
    stopTask: (data) => dispatch(actions.stopTask(data)),
    deleteTask: (data) => dispatch(actions.deleteTask(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeTrackerScreen);
