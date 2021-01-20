import React, { useState } from "react";
import { View, Button, Text, StyleSheet, Dimensions, Image } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import images from "../constents/images";


const StoneRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#FFF' }]} >
        <Text style={{ fontSize: 30, padding: 10 }}>বিভাগ</Text>
        <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center', }}>

            <View style={styles.CardDesign}>
                <Image source={images.Stone1} style={{ height: 150, width: 150, }} />

                <Text>১-ছিফটি</Text>
                <Text>১০০টাকা </Text>

            </View>

            <View style={styles.CardDesign}>
                <Image source={images.Stone1} style={{ height: 150, width: 150 }} />
            </View>
        </View>
    </View>
);

const SilicaRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#FFF' }]}>
        <Text>Shihab</Text>
    </View>
);

const initialLayout = { width: Dimensions.get('window').width };


const Home = ({ navigation }) => {


    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'stone', title: 'পাথর', icon: 'home-outline' },
        { key: 'silica', title: 'বালি', icon: 'home-outline' },
    ]);

    const renderScene = SceneMap({
        stone: StoneRoute,
        silica: SilicaRoute,
    });

    return (
        <View style={{ flex: 1 }}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                sceneContainerStyle={{ color: '#000' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    scene: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",

    },
    CardDesign: {
        margin: 10,
        // flex: 1,
        height: 220,
        width: 170,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: '#FFF'
    }

});

export default Home;