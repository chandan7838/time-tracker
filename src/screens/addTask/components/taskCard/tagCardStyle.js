import { StyleSheet } from "react-native";
import { colors } from "../../../../../utils/colors";

const styles = StyleSheet.create({
  tagContainer: {
    borderRadius: 9999,
    borderWidth: 1,
    marginTop: 10,
    marginRight: 6,
    borderColor: colors.grey,
  },
  selectedTagContainer: {
    borderRadius: 9999,
    borderWidth: 1,
    marginTop: 10,
    marginRight: 6,
    borderColor: colors.blue,
    backgroundColor: colors.blue,
  },
  tag: {
    fontSize: 14,
    paddingVertical: 4,
    paddingHorizontal: 16,
    color: colors.grey,
    textAlign: "center",
  },
  selectedTag: {
    fontSize: 14,
    paddingVertical: 4,
    paddingHorizontal: 16,
    color: colors.white,
    textAlign: "center",
  },
});

export default styles;
