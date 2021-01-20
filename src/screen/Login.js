import React, { useState } from 'react';
import { StyleSheet, ActivityIndicator, View, Text, Alert,TouchableOpacity,ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { TextInput, Button,DefaultTheme } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import images  from '../constents/images';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: "orange",
    }
  };

const Login = ({ navigation }) => {

   

    return (
        <ImageBackground source={images.bgImage} style={{flex:1}}>
        <View style={styles.container}>
            <View style={{alignItems:'center',marginBottom:80,marginTop:100}}>
                <Text style={{fontSize:35}}>
                হ্যালো
                </Text>
                <Text style={{fontSize:18}}>
                আপনার অ্যাকাউন্টে সাইন ইন করুন
                </Text>
            </View>


        <View style={{ justifyContent: 'center', alignItems: 'center',marginBottom:10, }}>
  <TextInput
    label='মোবাইল'
    mode="outlined"
    style={{ 
            borderRadius: 5, width: '85%', height: 45 ,
            backgroundColor: 'transparent'
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
            borderRadius: 5, width: '85%', height: 45 ,
            backgroundColor: 'transparent'
    }}
    theme={{ colors: { text: 'black', primary: 'rgb(33, 151, 186)' } }}
  />
</View>

<View style={{alignItems:'flex-end',marginRight:25,marginTop:10}}>
    <TouchableOpacity>
<Text style={{fontSize:16}}>
পাসওয়ার্ড ভুলে গেছেন?
</Text>
</TouchableOpacity>
</View>

<View style={{alignItems:'flex-end',marginRight:25,marginTop:80,justifyContent:'center'}}>
    <TouchableOpacity style={{flexDirection:'row',}}>
    <Text style={{fontSize:25}}>
লগইন
</Text>
<LinearGradient
 start={{ x: 0, y: 0 }}
 end={{x: 1, y: 1 }}
 colors={['#5851DB', '#C13584', '#E1306C', '#FD1D1D', '#F77737']}
style={{justifyContent:'center',alignItems:'center',marginLeft:10,
height:30,width:50,alignSelf:'center',borderRadius:20,top:2
}}>
<Ionicons name="arrow-forward" style={{fontSize:25}} />
</LinearGradient>
</TouchableOpacity>
</View>

<View style={{alignItems:'center',marginTop:80,}}>
    <View style={{flexDirection:'row'}}>
        <Text>কোন অ্যাকাউন্ট নেই?  </Text>
    <TouchableOpacity>
    <Text style={{fontSize:16,fontWeight:'700'}}>
    নিবন্ধন করুন
</Text>
</TouchableOpacity>
</View>

</View>

</View>
</ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor:'#FFF'
    },
   
})

export default Login;