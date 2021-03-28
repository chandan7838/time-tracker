import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

const styles = StyleSheet.create({
  addTaskButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: colors.blue,
    borderRadius: 100,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  plus: {
    fontSize: 50,
    textAlign: "center",
    marginBottom: 5,
    marginLeft: 2,
    color: colors.white,
  },
  noTasksContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  noTasks: {
    fontSize: 20,
  },
  noTasksSubHeading: {
    fontSize: 16,
    marginTop: 16,
  },
  flatList: {
    paddingBottom: 90,
  },
  textInput: {
    margin: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 9999,
  },
});

export default styles;
