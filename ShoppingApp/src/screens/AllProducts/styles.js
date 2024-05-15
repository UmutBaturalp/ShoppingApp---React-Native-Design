import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#222',
    alignItems: 'center',
  },

  //-------------------------------
  productsView: {
    width: windowWidth * 0.95,
    height: windowHeight * 0.86,
    backgroundColor: '#333',
    borderRadius: windowWidth * 0.05,
    marginTop: windowHeight * 0.02,
    alignItems: 'center',
  },
});
