import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;
export default styles = StyleSheet.create({
  allProductsItem: {
    width: windowWidth * 0.43,
    alignItems: 'center',
    marginHorizontal: windowWidth * 0.02,
  },

  allProductItemImage: {
    width: windowWidth * 0.43,
    height: windowHeight * 0.15,
    borderRadius: windowWidth * 0.03,
    objectFit: 'contain',
  },

  allProductsInfo: {
    paddingVertical: windowHeight * 0.008,
  },
  allProductsTitle: {
    fontSize: windowWidth * 0.035,
    fontWeight: '500',
    color: 'white',
  },
  allProductsPrice: {
    fontSize: windowWidth * 0.035,
    fontWeight: '500',
    color: 'lightblue',
    marginVertical: windowHeight * 0.008,
  },
});
