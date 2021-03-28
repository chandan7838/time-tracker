import { StyleSheet } from "react-native";
import { colors } from "../../../../../utils/colors";

const styles = StyleSheet.create({
  taskListContainer: {
    flexDirection: "column",
    flex: 1,
    margin: 8,
    padding: 16,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 4,
    backgroundColor: colors.white,
  },
  taskDataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  taskData: {
    flex: 0.8,
    flexDirection: "column",
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black,
    opacity: 0.7,
  },
  taskDate: {
    fontSize: 14,
    color: colors.grey,
    marginTop: 4,
  },
  taskCTA: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  edit: {
    fontSize: 15,
    color: colors.grey,
  },
  delete: {
    fontSize: 15,
    color: "#565656",
    marginLeft: 8,
  },
  tagList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default styles;
