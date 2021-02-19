/*
 2021.02.19 | junghoon15 | created
*/

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const BaseHeader = () => {
  // State ---------------------------------------------------------------------
  // Function ------------------------------------------------------------------
  // Main ----------------------------------------------------------------------
  return (
    <View style={styles.header}>
      <Text />
      <Text style={styles.text}>Rsquare</Text>
      <TouchableOpacity>
        <Icon name="bars" size={20} color="#161924" />
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#D6D8D9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
});

export default BaseHeader;
