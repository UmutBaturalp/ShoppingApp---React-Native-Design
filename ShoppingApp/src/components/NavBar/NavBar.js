import {View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import React from 'react';
import NavBarItem from '../NavBarItem/NavBarItem';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;
const NavBar = () => {
  return (
    <View>
      <View style={styles.navBar}>
        <NavBarItem itemName="Home" isActivity={true} />
        <NavBarItem itemName="Categories" />
        <NavBarItem itemName="Cart" />
        <NavBarItem itemName="Account" />
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navBar: {
    width: windowWidth,
    height: windowHeight * 0.075,
    backgroundColor: '#333',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.05,
  },
});
