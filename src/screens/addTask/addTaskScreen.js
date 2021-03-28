import React from "react";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../../utils/colors";
import styles from "./addTaskScreenStyle";
import TagCard from "./components/taskCard";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddTaskScreen = (props) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const editItem = props?.route?.params?.data || undefined;
  const [date, setDate] = useState(
    editItem?.date ? new Date(editItem?.date).toDateString() : null
  );
  const [title, setTitleData] = useState(editItem?.title || "");
  const [selectedTags, setSelectedTags] = useState(editItem?.tags || []);
  const [error, setError] = useState({
    titleError: false,
    dateError: false,
    selectedTagsError: false,
  });
  const { addTask, tagsList, editTask } = props;
  const onPress = () => {
    let errorState = { ...error };
    if (title === "" || title === undefined) {
      errorState["titleError"] = true;
      setError(errorState);
    }
    if (date === null || date === undefined) {
      errorState["dateError"] = true;
      setError(errorState);
    }
    if (selectedTags.length === 0) {
      errorState["selectedTagsError"] = true;
      setError(errorState);
    }
    if (Object.values(errorState).every((data) => data === false)) {
      let taskData = {
        title: title,
        date: new Date(date).getTime(),
        tags: selectedTags,
      };
      if (editItem) {
        taskData["id"] = editItem.id;
        taskData["isActive"] = editItem.isActive;
        editTask({ id: editItem.id, taskData });
        props.navigation.pop();
      } else {
        taskData["id"] = props.taskListData.length;
        taskData["isActive"] = true;
        addTask(taskData);
        props.navigation.pop();
      }
    }
  };
  const setTitle = (value) => {
    if (value !== "") {
      let errorState = { ...error };
      errorState["titleError"] = false;
      setError(errorState);
    }
    setTitleData(value);
  };
  const onChange = (date) => {
    setShowDatePicker(false);
    if (date.nativeEvent.timestamp === undefined) {
      return;
    }
    setDate(new Date(date.nativeEvent.timestamp).toDateString());
    let errorState = { ...error };
    errorState["dateError"] = false;
    setError(errorState);
  };

  const tagsAdded = (value, selected) => {
    if (selected) {
      selectedTags.push(value);
    } else {
      const tagIndex = selectedTags.indexOf((data) => data.id === value.id);
      selectedTags.splice(tagIndex, 1);
    }
    if (selectedTags.length > 0) {
      let errorState = { ...error };
      errorState["selectedTagsError"] = false;
      setError(errorState);
    }
    setSelectedTags(selectedTags);
  };

  const renderError = () => {
    return <Text style={styles.error}>{"Required*"}</Text>;
  };

  return (
    <View style={styles.addTaskContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <>
          <TextInput
            style={styles.textInput}
            placeholder={"Enter task title"}
            selectionColor={colors.grey}
            value={title}
            underlineColorAndroid={colors.grey}
            onChangeText={(value) => setTitle(value)}
          />
          {error.titleError && renderError()}
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <TextInput
              style={styles.textInput}
              placeholder={"Select date"}
              selectionColor={colors.grey}
              value={date}
              editable={false}
              underlineColorAndroid={colors.grey}
            />
          </TouchableOpacity>
          {error.dateError && renderError()}
          <Text style={styles.selectTags}>Select tags :</Text>
          <View style={styles.tagList}>
            {tagsList.map((item, index) => {
              return (
                <TagCard
                  key={item.id}
                  item={item}
                  index={index}
                  selectedTags={editItem?.tags}
                  tagsAdded={tagsAdded}
                  disabled={false}
                />
              );
            })}
          </View>
          <View style={{ marginTop: 8 }}>
            {error.selectedTagsError && renderError()}
          </View>
        </>
      </ScrollView>
      <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{"SUBMIT"}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={"date"}
          is24Hour={true}
          display="default"
          minimumDate={new Date()}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default AddTaskScreen;
