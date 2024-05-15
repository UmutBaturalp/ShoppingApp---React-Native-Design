import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Size from './Size';
import Color from './Color';
const SizeColor = () => {
  return (
    <View style={styles.sizeColorView}>
      <Size />
      <Color />
    </View>
  );
};

export default SizeColor;
