import { Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
const Color = () => {
  return (
    <View>
      <View style={styles.colorView}>
        <Text style={styles.colorText}>Color</Text>
        <View style={styles.choseColorView}>
          <View style={[styles.choseColor, {backgroundColor: 'white'}]}></View>
          <View style={[styles.choseColor, {backgroundColor: 'blue'}]}></View>
          <View style={[styles.choseColor, {backgroundColor: 'red'}]}></View>
        </View>
      </View>
    </View>
  );
};

export default Color;
