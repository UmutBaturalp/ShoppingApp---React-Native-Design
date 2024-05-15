import {StyleSheet, Text, View, Dimensions, StatusBar} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;
export default styles = StyleSheet.create({
  seeAllView: {
    width: windowWidth * 0.94,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: windowWidth * 0.05,
    alignSelf: 'center',
  },
  newArrivalsText: {
    fontSize: windowWidth * 0.04,
    fontWeight: '700',
    color: 'white',
  },
  seeAllText: {
    fontSize: windowWidth * 0.033,
    fontWeight: '500',
    color: '#ddd',
    textDecorationLine: 'underline',
  },
});
