import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import PropTypes from 'prop-types';
const AddCartArea = props => {
  const {addFunc, interestFunc, amount, modalFunc} = props;
  return (
    <View>
      <View style={styles.footer}>
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
        <TouchableOpacity onPress={modalFunc}>
          <View style={styles.addCartButton}>
            <Text style={styles.addCartButtonText}>Add to Cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

AddCartArea.propTypes = {
  addFunc: PropTypes.func,
  interestFunc: PropTypes.func,
  amount: PropTypes.number,
  modalFunc: PropTypes.func,
};

AddCartArea.defaultProps = {
  addFunc: () => {},
  interestFunc: () => {},
  amount: 0,
  modalFunc: () => {},
};

export default AddCartArea;
