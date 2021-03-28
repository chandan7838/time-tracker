import { StyleSheet } from "react-native";
import { colors } from "../../../../../utils/colors";

const styles = StyleSheet.create({
  taskTimerContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  taskTimer: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors.black,
  },
  buttonContainer: {
    backgroundColor: colors.green,
    borderRadius: 4,
    marginTop: 8,
  },
  buttonContainerRed: {
    backgroundColor: colors.red,
    borderRadius: 4,
    marginTop: 8,
  },
  buttonContainerDisabled: {
    backgroundColor: colors.grey,
    borderRadius: 4,
    marginTop: 8,
  },
  button: {
    fontSize: 15,
    padding: 8,
    textAlign: "center",
    textAlignVertical: "center",
    color: colors.white,
  },
  disabledButton: {
    fontSize: 15,
    padding: 8,
    textAlign: "center",
    textAlignVertical: "center",
    color: colors.white,
  },
  upcoming: {
    fontSize: 18,
    color: colors.black,
    fontWeight: "bold",
    marginBottom: 12,
  },
});

export default styles;
