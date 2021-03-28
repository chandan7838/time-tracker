import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TimeTrackerScreen from "../src/screens/timeTrackerScreen";
import AddTaskScreen from "../src/screens/addTask";
import { Provider } from "react-redux";
import store from "../src/store";

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Provider store={store()}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"TimeTrackerScreen"}>
          <Stack.Screen
            name="TimeTrackerScreen"
            component={TimeTrackerScreen}
            options={{ title: "Time Tracker" }}
          />
          <Stack.Screen
            name="AddTaskScreen"
            component={AddTaskScreen}
            options={{ title: "Create Task" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AppNavigation;
