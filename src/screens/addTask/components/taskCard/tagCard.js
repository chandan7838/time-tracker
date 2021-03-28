import React, { useEffect } from "react";
import { useState } from "react";
import { Text, View } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import styles from "./tagCardStyle";

const TagCard = (props) => {
  const { item, tagsAdded, disabled, selectedTags } = props;
  const [selected, setSelected] = useState(false);
  const handleSelected = (item) => {
    if (!disabled) {
      setSelected(!selected);
      tagsAdded(item, !selected);
    }
  };
  useEffect(() => {
    if (selectedTags?.find((data) => data.id === item.id)) {
      setSelected(!selected);
    }
  }, [selectedTags]);
  return (
    <View style={selected ? styles.selectedTagContainer : styles.tagContainer}>
      <TouchableNativeFeedback onPress={() => handleSelected(item)}>
        <Text style={selected ? styles.selectedTag : styles.tag}>
          {item?.tag}
        </Text>
      </TouchableNativeFeedback>
    </View>
  );
};

export default TagCard;
