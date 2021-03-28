import React from "react";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import TagCard from "../../../addTask/components/taskCard";
import Timer from "../timer";
import styles from "./taskCardStyle";

const TaskCard = (props) => {
  const { item, index } = props;
  const handleEdit = () => {
    props.navigation.push("AddTaskScreen", { data: item });
  };
  const handleDelete = () => {
    Alert.alert("Delete", "Do you want to delete this task?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      { text: "OK", onPress: () => props.deleteTask(index) },
    ]);
  };
  return (
    <View style={styles.taskListContainer}>
      <View style={styles.taskDataContainer}>
        <View style={styles.taskData}>
          <Text style={styles.taskTitle}>{item?.title}</Text>
          <Text style={styles.taskDate}>
            {new Date(item?.date).toDateString()}
          </Text>
          <View style={styles.tagList}>
            {item.tags.map((item, index) => {
              return (
                <TagCard
                  key={item.id}
                  item={item}
                  index={index}
                  disabled={true}
                />
              );
            })}
          </View>
        </View>
        <View style={styles.taskCTA}>
          <TouchableOpacity onPress={handleEdit}>
            <Text style={styles.edit}>{"EDIT"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete}>
            <Text style={styles.delete}>{"DELETE"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Timer {...props} item={item} />
    </View>
  );
};

export default TaskCard;
