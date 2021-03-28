import React, { useEffect } from "react";
import { useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { colors } from "../../../utils/colors";
import TaskCard from "./components/taskCard";
import styles from "./timeTrackerScreenStyle";

const TimeTrackerScreen = (props) => {
  const { navigation, taskListData } = props;
  const [list, setList] = useState(taskListData);

  const handlePress = () => {
    navigation.push("AddTaskScreen");
  };

  const handleSearch = (value) => {
    if (value === "") {
      setList(taskListData);
    } else {
      const searchList = list.filter(
        (data) =>
          data.title.toLowerCase().includes(value.toLowerCase()) ||
          data.tags.find((data) =>
            data.tag.toLowerCase().includes(value.toLowerCase())
          )
      );
      setList(searchList);
    }
  };

  useEffect(() => {
    setList(taskListData);
  }, [taskListData]);

  return (
    <>
      {taskListData.length > 0 ? (
        <>
          <TextInput
            style={styles.textInput}
            placeholder={"Search title or tag"}
            selectionColor={colors.grey}
            onChangeText={(value) => handleSearch(value)}
          />
          <FlatList
            data={list}
            contentContainerStyle={styles.flatList}
            renderItem={({ item, index }) => {
              return (
                <TaskCard {...props} key={index} item={item} index={index} />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </>
      ) : (
        <View style={styles.noTasksContainer}>
          <Text style={styles.noTasks}>{"No tasks"}</Text>
          <Text style={styles.noTasksSubHeading}>
            {"Click + button to create tasks"}
          </Text>
        </View>
      )}
      <TouchableOpacity style={styles.addTaskButton} onPress={handlePress}>
        <Text style={styles.plus}>{"+"}</Text>
      </TouchableOpacity>
    </>
  );
};

export default TimeTrackerScreen;
