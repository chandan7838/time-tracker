import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

const styles = StyleSheet.create({
  addTaskContainer: {
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
  textInput: {
    fontSize: 16,
    color: colors.black,
  },
  tagContainer: {
    flexWrap: "wrap",
  },
  selectTags: {
    fontSize: 16,
    marginTop: 16,
    color: colors.black,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: colors.blue,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: colors.white,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  tagList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  error: {
    color: colors.red,
  },
});

export default styles;
