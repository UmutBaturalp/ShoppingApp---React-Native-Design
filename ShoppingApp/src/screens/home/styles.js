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
  ///-------------------------------
  scrollView: {
    marginBottom: windowHeight * 0.1,
    width: windowWidth,
  },
});
