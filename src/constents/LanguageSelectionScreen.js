import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import StringsOfLanguages from './Language/LocalizedStrings';
import { useNavigation, useRoute } from '@react-navigation/native';

const LanguageSelectionScreen = () => {
  const navigation = useNavigation();
  const lang = [
    { shortform: 'bn', longform: 'Bangla' },
    { shortform: 'en', longform: 'English' },

  ];

  const settext = (value) => {
    StringsOfLanguages.setLanguage(value);
    navigation.navigate('Home', { selectedLanguage: value });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.headingStyle}>
          Please Select Preferred Language
        </Text>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/language.png',
          }}
          style={styles.imageStyle}
        />
        <ScrollView style={{ marginTop: 30, width: '80%' }}>
          {lang.map((item, key) => (
            <View style={styles.elementContainer} key={key}>
              <Text
                onPress={() => settext(item.shortform)}
                style={styles.textStyle}>
                {item.longform}
              </Text>
              <View style={styles.saparatorStyle} />
            </View>
          ))}
        </ScrollView>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  headingStyle: {
    color: '#191919',
    fontSize: 25,
    textAlign: 'center',
  },
  imageStyle: {
    width: 64,
    height: 64,
    marginTop: 30,
  },
  elementContainer: {
    width: '100%',
    marginTop: 30,
    alignItems: 'center',
  },
  textStyle: {
    color: '#191919',
    fontSize: 25,
  },
  saparatorStyle: {
    height: 0.5,
    width: '60%',
    backgroundColor: '#C2C2C2',
    marginTop: 10,
  },
});

export default LanguageSelectionScreen;