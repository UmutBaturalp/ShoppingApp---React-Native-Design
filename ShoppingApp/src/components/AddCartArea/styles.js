import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default styles = StyleSheet.create({
  footer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amountView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth * 0.3,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amountLeft: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.08,
    alignItems: 'center',
    borderWidth: 2,
    justifyContent: 'center',
    borderColor: 'white',
    borderBottomLeftRadius: windowWidth * 0.05,
    borderTopLeftRadius: windowWidth * 0.05,
  },
  amountRight: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: windowWidth * 0.05,
    borderTopRightRadius: windowWidth * 0.05,
    backgroundColor: 'white',
  },
  amountText: {
    fontSize: windowWidth * 0.045,
    fontWeight: '400',
    color: 'white',
  },
  addCartView: {},
  addCartButton: {
    backgroundColor: 'white',
    paddingHorizontal: windowWidth * 0.05,
    paddingVertical: windowHeight * 0.01,
    borderRadius: windowWidth * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCartButtonText: {
    fontSize: windowWidth * 0.045,
    fontWeight: '500',
    color: 'black',
  },
});
