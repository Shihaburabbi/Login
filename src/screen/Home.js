import React, { useState, useEffect } from "react";
import { View, Button, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import images from "../constents/images";


import { useNavigation, useRoute } from '@react-navigation/native';
import StringsOfLanguages from "../constents/Language/LocalizedStrings";



const initialLayout = { width: Dimensions.get('window').width };


const Home = () => {
    const navigation = useNavigation();
    // const route = useRoute();

    const StoneRoute = () => (
        <View style={[styles.scene, { backgroundColor: '#FFF' }]} >
            <Text style={styles.text}>
                {StringsOfLanguages.first}
            </Text>
            <Text style={styles.text}>
                {StringsOfLanguages.second}
            </Text>
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



    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'stone', title: 'পাথর', icon: 'home-outline' },
        { key: 'silica', title: 'বালি', icon: 'home-outline' },
    ]);

    const renderScene = SceneMap({
        stone: StoneRoute,
        silica: SilicaRoute,
    });

    // const { selectedLanguage } = route.params;

    // useEffect(() => {
    //     let heading = '';
    //     if (selectedLanguage == 'hi') {
    //         heading = 'Selected Language Hindi';
    //     } else if (selectedLanguage == 'ma') {
    //         heading = 'Selected Language Marathi';
    //     } else if (selectedLanguage == 'en') {
    //         heading = 'Selected Language English';
    //     } else if (selectedLanguage == 'fr') {
    //         heading = 'Selected Language French';
    //     }
    //     // navigation.setOptions({ title: heading });
    // }, []);



    return (
        <View style={{ flex: 1 }}>

            <View style={{ height: 56, flexDirection: 'row', backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('LanguageSelectionScreen')}>
                    <Text>Language</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>
                {StringsOfLanguages.first}
            </Text>
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
    },
    text: {
        color: '#191919',
        fontSize: 25,
        marginTop: 15,
    },

});

export default Home;