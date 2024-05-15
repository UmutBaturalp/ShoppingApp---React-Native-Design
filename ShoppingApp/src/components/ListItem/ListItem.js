import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import PropTypes from 'prop-types';
const ListItem = props => {
  const {item} = props;
  return (
    <View>
      <View style={styles.allProductsItem}>
        <Image source={{uri: item.image}} style={styles.allProductItemImage} />
        <View style={styles.allProductsInfo}>
          <Text numberOfLines={2} style={styles.allProductsTitle}>
            {item.title}
          </Text>
          <Text style={styles.allProductsPrice}>AED {item.price}</Text>
        </View>
      </View>
    </View>
  );
};

ListItem.propTypes = {
  item: PropTypes.object,
};

ListItem.defaultProps = {
  item: {},
};

export default ListItem;
