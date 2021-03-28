import {
  ADD_TASK,
  DELETE_TASK,
  START_TASK,
  STOP_TASK,
  EDIT_TASK,
} from "../actions/actionType";

const initialState = {
  taskListData: [],
  tagsList: [
    {
      id: "tag1",
      tag: "Reading",
    },
    {
      id: "tag2",
      tag: "Meeting",
    },
    {
      id: "tag3",
      tag: "Presentation",
    },
    {
      id: "tag4",
      tag: "Project",
    },
    {
      id: "tag5",
      tag: "Demo",
    },
    {
      id: "tag6",
      tag: "Important",
    },
  ],
};

function taskListReducer(state = initialState, action) {
  if (action.type === ADD_TASK) {
    return {
      ...state,
      taskListData: [...state.taskListData, action.payload],
    };
  } else if (action.type === START_TASK) {
    let taskList = state.taskListData.map((data) => {
      if (data.id !== action.payload) {
        return { ...data, isActive: false };
      } else {
        return data;
      }
    });
    return {
      ...state,
      taskListData: taskList,
    };
  } else if (action.type === STOP_TASK) {
    let taskList = state.taskListData.map((data) => {
      if (data.id !== action.payload) {
        return { ...data, isActive: true };
      } else {
        return data;
      }
    });
    return {
      ...state,
      taskListData: taskList,
    };
  } else if (action.type === DELETE_TASK) {
    return {
      ...state,
      taskListData: [
        ...state.taskListData.slice(0, action.payload),
        ...state.taskListData.slice(action.payload + 1),
      ],
    };
  } else if (action.type === EDIT_TASK) {
    let taskList = state.taskListData.map((data) => {
      if (data.id === action.payload.id) {
        return action.payload.taskData;
      } else {
        return data;
      }
    });

    return {
      ...state,
      taskListData: taskList,
    };
  }
  return state;
}

export default taskListReducer;
