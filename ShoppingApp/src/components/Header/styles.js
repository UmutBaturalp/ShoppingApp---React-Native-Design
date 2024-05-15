import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default styles = StyleSheet.create({
  header: {
    width: windowWidth,
    height: windowHeight * 0.1,
    backgroundColor: 'black',
    borderBottomRightRadius: windowWidth * 0.08,
    borderBottomLeftRadius: windowWidth * 0.08,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: windowWidth * 0.05,
  },
  headerText: {
    color: 'white',
    fontSize: windowWidth * 0.02,
    maxWidth: windowWidth * 0.09,
    textAlign: 'center',
  },
  searchBar: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.04,
    borderRadius: windowWidth * 0.05,
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    fontSize: windowWidth * 0.035,
  },
  headerIcon: {
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
  },
});
