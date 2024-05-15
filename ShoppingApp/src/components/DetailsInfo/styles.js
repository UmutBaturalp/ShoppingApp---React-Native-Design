import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default styles = StyleSheet.create({
  productInfoView: {
    width: windowWidth * 0.9,
    paddingVertical: windowHeight * 0.02,
    rowGap: windowHeight * 0.01,
  },
  productInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productTitle: {
    fontSize: windowWidth * 0.055,
    fontWeight: '500',
    color: 'white',
    letterSpacing: 1,
  },
  productPriceView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: windowWidth * 0.03,
  },
  productPrice: {
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
    color: 'lightblue',
  },
  productOldPrice: {
    fontSize: windowWidth * 0.032,
    fontWeight: '500',
    color: '#ccc',
  },
  productDescription: {
    fontSize: windowWidth * 0.035,
    fontWeight: '500',
    color: 'gray',
  },
  productInfoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: windowWidth * 0.03,
  },
  productShop: {
    color: 'white',
    fontSize: windowWidth * 0.035,
    fontWeight: '500',
  },
  productOnSale: {
    color: 'green',
    fontSize: windowWidth * 0.035,
    fontWeight: '500',
  },
  productFavIcon: {
    width: windowWidth * 0.04,
    height: windowWidth * 0.04,
  },
});
