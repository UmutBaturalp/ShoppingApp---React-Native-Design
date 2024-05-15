import {
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;
export default styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  OpacityView: {
    width: windowWidth,
    height: windowHeight * 0.75,
    backgroundColor: 'black',
    opacity: 0.3,
  },
  modalView: {
    width: windowWidth,
    height: windowHeight * 0.25,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  closeButtonText: {
    fontSize: windowWidth * 0.03,
    fontWeight: '400',
    color: 'white',
  },

  modalContent: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalContentProductInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: windowWidth * 0.02,
    justifyContent: 'flex-start',
    width: windowWidth * 0.5,
  },
  modalContentImage: {
    width: windowWidth * 0.25,
    height: windowWidth * 0.25,
    borderRadius: windowWidth * 0.02,
  },
  modalContentText: {
    fontSize: windowWidth * 0.04,
    color: 'white',
    paddingVertical: windowWidth * 0.02,
    maxWidth: windowWidth * 0.35,
  },
  modalContentAddView: {
    alignItems: 'center',
    rowGap: windowWidth * 0.02,
  },
  modalContentAddTotal: {
    fontSize: windowWidth * 0.04,
    color: 'white',
  },
  amountView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: windowWidth * 0.03,
  },
  amountText: {
    fontSize: windowWidth * 0.05,
    color: 'white',
  },

  amountLeft: {
    width: windowWidth * 0.075,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderTopLeftRadius: windowWidth * 0.05,
    borderBottomLeftRadius: windowWidth * 0.05,
  },
  amountCenter: {},
  amountRight: {
    width: windowWidth * 0.075,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: windowWidth * 0.05,
    borderBottomRightRadius: windowWidth * 0.05,
    backgroundColor: 'white',
  },
  addCartButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: windowWidth * 0.02,
    paddingHorizontal: windowWidth * 0.04,
    paddingVertical: windowHeight * 0.005,
    marginTop: windowHeight * 0.01,
  },
  addCartButtonText: {
    fontSize: windowWidth * 0.03,
    color: 'black',
  },
});
