import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
const Size = () => {
  return (
    <View>
      <View style={styles.sizeView}>
        <View style={styles.sizeTypeView}>
          <Text style={styles.sizeText}>Size</Text>
          <View style={styles.sizeTypes}>
            <Text style={styles.sizeTypeText}>US</Text>
            <Text style={styles.sizeTypeText}>EU</Text>
            <Text style={styles.sizeTypeText}>UK</Text>
          </View>
        </View>
        <View style={styles.choseSizeView}>
          <View style={styles.choseSize}>
            <Text style={styles.choseSizeText}>7</Text>
          </View>
          <View style={styles.choseSize}>
            <Text style={styles.choseSizeText}>8</Text>
          </View>
          <View style={styles.choseSize}>
            <Text style={styles.choseSizeText}>9</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Size;
