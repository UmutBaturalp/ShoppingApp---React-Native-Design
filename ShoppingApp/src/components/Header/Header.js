import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import myIcons from '../../assets/Icons/';
const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>The DUBAI MALL</Text>
        <TextInput
          style={styles.searchBar}
          cursorColor={'white'}
          textAlign="center"
          placeholder="What are you looking for?"
          placeholderTextColor={'gray'}
        />
        <Image
          style={styles.headerIcon}
          source={myIcons.camera}
          tintColor={'white'}
        />
      </View>
    </View>
  );
};
export default Header;
