import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import PropTypes from 'prop-types';
const SeeAllView = props => {
  const {itemName, onPress} = props;
  return (
    <View>
      <View style={styles.seeAllView}>
        <Text style={styles.newArrivalsText}>{itemName}</Text>
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
SeeAllView.propTypes = {
  itemName: PropTypes.string,
  onPress: PropTypes.func,
};
SeeAllView.defaultProps = {
  itemName: 'New Arrivals',
  onPress: () => {},
};
export default SeeAllView;
