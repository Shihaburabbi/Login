import React, { useState } from 'react';
import { StyleSheet, ActivityIndicator, View, Text, Alert, TouchableOpacity, ImageBackground, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button, DefaultTheme } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import images from '../constents/images';

const Login = () => {
    const navigation = useNavigation();

    const _Login = () => {
        navigation.navigate("Register")
    }

    return (
        // <ImageBackground source={images.bgImage} style={{flex:1}}>
        <View style={styles.container}>

            <Image source={images.imageTop} style={{ height: 130, width: 180, alignSelf: 'flex-end', top: -12, left: 10 }} />


            <View style={{ alignItems: 'center', marginBottom: 80, marginTop: 80 }}>
                <Text style={{ fontSize: 35, fontWeight: '700', fontFamily: "Galada-Regular" }}>
                    হ্যালো
                </Text>
                <Text style={{ fontSize: 18, fontFamily: "HindSiliguri-Regular" }}>
                    আপনার অ্যাকাউন্টে সাইন ইন করুন
                
                </Text>

            </View>


            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10, }}>
                <TextInput
                    label='মোবাইল'
                    mode="outlined"
                    style={{
                        borderRadius: 5, width: '85%', height: 45,
                        backgroundColor: '#FFF'
                    }}
                    theme={{ colors: { text: 'black', primary: 'rgb(33, 151, 186)' } }}
                />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <TextInput
                    label='পাসওয়ার্ড'
                    mode="outlined"
                    secureTextEntry={true}
                    style={{
                        borderRadius: 5, width: '85%', height: 45,
                        backgroundColor: '#FFF'
                    }}
                    theme={{ colors: { text: 'black', primary: 'rgb(33, 151, 186)' } }}
                />
            </View>

            <View style={{ alignItems: 'flex-end', marginRight: 25, marginTop: 10 }}>
                <TouchableOpacity>
                    <Text style={{ fontSize: 16, fontFamily: "HindSiliguri-Regular" }}>
                        পাসওয়ার্ড ভুলে গেছেন?
</Text>
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'flex-end', marginRight: 25, marginTop: 60, justifyContent: 'center' }}>
                <TouchableOpacity >

                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        colors={['#f7c356', '#fcb14c', '#fcaf47', '#fea13a']}
                        style={{
                            justifyContent: 'center', alignItems: 'center', marginLeft: 10,
                            height: 55, width: 140, alignSelf: 'center', borderRadius: 30, top: 2, flexDirection: 'row'
                        }}>
                        <Text style={{ fontSize: 30 }}>
                            লগইন
</Text>
                        <Ionicons name="arrow-forward" style={{ fontSize: 35 }} />
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center', marginTop: 80, }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontFamily: "HindSiliguri-Regular" }}>কোন অ্যাকাউন্ট নেই?  </Text>
                    <TouchableOpacity
                        onPress={_Login}>
                        <Text style={{ fontSize: 16, fontWeight: '700', fontFamily: "Galada-Regular" }}>
                            নিবন্ধন করুন
                </Text>
                    </TouchableOpacity>
                </View>

            </View>



        </View>
        // </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FFF'
    },

})

export default Login;