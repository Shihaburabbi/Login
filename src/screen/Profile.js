import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Login from "./Login";


const Profile = () => {
    return (
        <Login />
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});

export default Profile;