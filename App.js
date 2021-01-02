import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DangNhap from "./src/DangNhap";
import func_Map from "./src/Map";
import func_Save from "./src/Save_Locations";
import func_Profile from "./src/Profile";
import MapRouter from "./src/MapSave";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
const Stack = createStackNavigator();
const Stack_Container = createStackNavigator();
const Tab = createBottomTabNavigator();
function Container({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="MapView"
      tabBarOptions={{
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="MapView"
        component={func_Map}
        options={{
          tabBarLabel: "MapView",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="earth" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Save"
        component={func_Save}
        options={{
          tabBarLabel: "Save",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="save" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={func_Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="save" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Details">
        <Stack.Screen
          name="Home"
          component={DangNhap}
          options={{ title: "Đăng Nhập" }}
        />
        <Stack.Screen
          name="Details"
          component={Container}
          options={{ title: "Home" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
