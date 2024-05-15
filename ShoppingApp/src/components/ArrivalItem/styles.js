import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default styles = StyleSheet.create({
  newArrivalsItem: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.25,
    marginRight: windowWidth * 0.025,
  },
  newArrivalsImage: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.17,
    borderRadius: windowWidth * 0.04,
    objectFit: 'contain',
  },
  newArrivalsInfo: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.08,
    paddingTop: windowHeight * 0.01,
    rowGap: windowHeight * 0.005,
  },
  newArrivalsTitle: {
    fontSize: windowWidth * 0.035,
    fontWeight: '400',
    color: 'white',
  },
  newArrivalsPrice: {
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
    color: 'cyan',
  },
});
