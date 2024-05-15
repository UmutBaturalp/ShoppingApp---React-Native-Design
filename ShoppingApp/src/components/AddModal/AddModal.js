import {Text, View, Modal, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import PropTypes from 'prop-types';
const AddModal = props => {
  const {amount, addFunc, interestFunc, modalFunc, modalVisible, infos} = props;
  return (
    <Modal transparent={true} visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.OpacityView}></View>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={modalFunc}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <View style={styles.modalContent}>
            <View style={styles.modalContentProductInfo}>
              <Image
                source={{
                  uri: infos.image,
                }}
                style={styles.modalContentImage}
              />
              <Text numberOfLines={3} style={styles.modalContentText}>
                {infos.title}
              </Text>
            </View>
            <View style={styles.modalContentAddView}>
              <Text style={styles.modalContentAddTotal}>
                AED {amount * infos.price}
              </Text>
              <View style={styles.amountView}>
                <TouchableOpacity onPress={interestFunc}>
                  <View style={styles.amountLeft}>
                    <Text style={styles.amountText}>-</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.amountCenter}>
                  <Text style={styles.amountText}>{amount}</Text>
                </View>
                <TouchableOpacity onPress={addFunc}>
                  <View style={styles.amountRight}>
                    <Text style={[styles.amountText, {color: 'black'}]}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.addCartButton}
                onPress={modalFunc}>
                <Text style={styles.addCartButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

AddModal.propTypes = {
  amount: PropTypes.number,
  addFunc: PropTypes.func,
  interestFunc: PropTypes.func,
  modalFunc: PropTypes.func,
  modalVisible: PropTypes.bool,
  infos: PropTypes.object,
};
AddModal.defaultProps = {
  amount: 0,
  addFunc: () => {},
  interestFunc: () => {},
  modalFunc: () => {},
  modalVisible: false,
  infos: {},
};

export default AddModal;