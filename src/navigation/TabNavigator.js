import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import Profile from "../screen/Profile";
import Home from "../screen/Home";



const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home-outline'
                            : 'home-outline';
                    } else if (route.name === 'AddToCard') {
                        iconName = focused ? 'cart-outline' : 'cart-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person-circle-outline' : 'person-circle-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={MainStackNavigator} />
            <Tab.Screen name="AddToCard" component={ContactStackNavigator} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;

