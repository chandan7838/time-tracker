import {
  ADD_TASK,
  START_TASK,
  STOP_TASK,
  DELETE_TASK,
  EDIT_TASK,
} from "./actionType";

export const addTask = (data) => {
  return {
    type: ADD_TASK,
    payload: data,
  };
};

export const startTask = (data) => {
  return {
    type: START_TASK,
    payload: data,
  };
};

export const stopTask = (data) => {
  return {
    type: STOP_TASK,
    payload: data,
  };
};

export const deleteTask = (data) => {
  return {
    type: DELETE_TASK,
    payload: data,
  };
};

export const editTask = (data) => {
  return {
    type: EDIT_TASK,
    payload: data,
  };
};
