/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import BaseHeader from './src/Layout/Header';
import MainMenu from './src/Layout/MainMenu';

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BaseHeader />
      <View style={styles.btnLayout}>
        <TouchableOpacity style={styles.btn} activeOpacity={1}>
          <Text style={styles.btnText}>빌딩 검색</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} activeOpacity={1}>
          <Text style={styles.btnText}>빌딩 검색</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.menuList}>
        <MainMenu />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnLayout: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    width: '48%',
    borderRadius: 1,
    borderWidth: 2,
    borderColor: 'red',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
  },
  menuList: {
    padding: 10,
  },
});

export default App;
