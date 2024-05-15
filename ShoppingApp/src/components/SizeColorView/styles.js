import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default styles = StyleSheet.create({
  sizeColorView: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.15,
    justifyContent: 'space-between',
    paddingVertical: windowHeight * 0.02,
    flexDirection: 'row',
  },

  //-------------------------
  sizeView: {
    width: windowWidth * 0.42,
    justifyContent: 'space-between',
    rowGap: windowHeight * 0.03,
  },
  sizeTypeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sizeText: {
    color: 'white',
    fontSize: windowWidth * 0.035,
    fontWeight: '500',
  },
  sizeTypes: {
    flexDirection: 'row',
    columnGap: windowWidth * 0.03,
  },
  sizeTypeText: {
    color: 'white',
    fontSize: windowWidth * 0.032,
    fontWeight: '400',
  },
  choseSizeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  choseSize: {
    width: windowWidth * 0.13,
    height: windowWidth * 0.13,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  choseSizeText: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
  },

  //-------------------------
  colorView: {
    width: windowWidth * 0.42,
    justifyContent: 'space-between',
    rowGap: windowHeight * 0.03,
  },
  colorText: {
    color: 'white',
    fontSize: windowWidth * 0.035,
  },
  choseColorView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  choseColor: {
    width: windowWidth * 0.13,
    height: windowWidth * 0.13,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
});
