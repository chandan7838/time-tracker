import React from "react";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { formatTime } from "../../../../../utils/formatTime";
import styles from "./timerstyles";
import useTimer from "./useTimer";
import moment from "moment";

const Timer = (props) => {
  const { item } = props;
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
  } = useTimer(0);
  const handleStartButton = () => {
    if (!isActive) {
      handleStart();
      props.startTask(item.id);
    } else if (isPaused) {
      handlePause();
      props.stopTask(item.id);
    } else {
      handleResume();
      props.startTask(item.id);
    }
  };
  return (
    <View style={styles.taskTimerContainer}>
      <Text style={styles.taskTimer}>{formatTime(timer)}</Text>
      {item.date - moment().endOf("day").format("x") < 0 ? (
        <TouchableOpacity
          style={
            !item.isActive
              ? styles.buttonContainerDisabled
              : !isActive || !isPaused
              ? styles.buttonContainer
              : styles.buttonContainerRed
          }
          disabled={!item.isActive}
          onPress={handleStartButton}
        >
          <Text style={item.isActive ? styles.button : styles.disabledButton}>
            {!isActive || !isPaused ? "START" : "STOP"}
          </Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.upcoming}>{"Up Coming"}</Text>
      )}
    </View>
  );
};

export default Timer;
