import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default styles = StyleSheet.create({
  productContainer: {
    alignItems: 'center',
  },
  productImage: {
    width: windowWidth,
    height: windowHeight * 0.35,
    resizeMode: 'contain',
  },
  productSaleView: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    backgroundColor: 'black',
    borderRadius: windowWidth * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: windowWidth * 0.05,
    right: windowWidth * 0.05,
  },
  productSaleText: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
  },
  productLineView: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.025,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    columnGap: windowWidth * 0.015,
  },
  productLine: {
    width: windowWidth * 0.07,
    height: 3,
    backgroundColor: 'gray',
  },
});
