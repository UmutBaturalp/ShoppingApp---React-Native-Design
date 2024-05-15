import {StyleSheet, Text, View, Dimensions, StatusBar} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;
export default styles = StyleSheet.create({
  productContainer: {
    alignItems: 'center',
  },
  productView: {
    width: windowWidth * 0.95,
    height: windowHeight * 0.35,
    backgroundColor: 'white',
    borderRadius: windowWidth * 0.05,
    marginTop: windowHeight * 0.02,
  },
  productInfoView: {},
  productTitleView: {
    padding: windowWidth * 0.05,
  },
  productTitle: {
    fontSize: windowWidth * 0.07,
    fontWeight: '900',
    color: 'black',
    maxWidth: windowWidth * 0.5,
  },
  productPrice: {
    fontSize: windowWidth * 0.05,
    fontWeight: '700',
    color: 'black',
    paddingHorizontal: windowWidth * 0.05,
  },
  productButton: {
    backgroundColor: 'black',
    paddingHorizontal: windowWidth * 0.05,
    paddingVertical: windowWidth * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '20%',
    left: '5%',
    zIndex: 2,
  },
  productButtonText: {
    color: 'white',
    fontSize: windowWidth * 0.04,
  },
  productImage: {
    width: '60%',
    height: '50%',
    position: 'absolute',
    right: '1%',
    bottom: '1%',
    borderRadius: windowWidth * 0.05,
    objectFit: 'contain',
  },
  productSale: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    position: 'absolute',
    right: '5%',
    top: '5%',
  },
  productSaleText: {
    color: 'white',
    fontSize: windowWidth * 0.04,
  },
  productLineView: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.04,
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
