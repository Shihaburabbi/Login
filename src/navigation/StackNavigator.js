import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screen/Home";
import Profile from "../screen/Profile";
import AddToCard from "../screen/AddToCard";
import Login from "../screen/Login";
import Register from "../screen/Register";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
    headerShown: false
};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}

const ContactStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="AddToCard" component={AddToCard} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator, ContactStackNavigator };