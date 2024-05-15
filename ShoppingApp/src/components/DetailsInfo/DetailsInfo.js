import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import myIcons from '../../assets/Icons';
import PropTypes from 'prop-types';
const DetailsInfo = props => {
  const {title, price, description, isActive, onPress} = props;
  return (
    <View>
      <View style={styles.productInfoView}>
        <View style={styles.productInfo}>
          <View style={styles.productInfoLeft}>
            <Text style={styles.productShop}>NIKE Store</Text>
            <Text style={styles.productOnSale}>On Sale</Text>
          </View>
          <TouchableOpacity onPress={onPress}>
            <Image
              style={styles.productFavIcon}
              source={isActive ? myIcons.Fav_a : myIcons.Fav}
              tintColor={isActive ? 'red' : 'white'}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.productTitle}>{title}</Text>
        <View style={styles.productPriceView}>
          <Text style={styles.productPrice}>AED {price}</Text>
          <Text style={styles.productOldPrice}>Was AED 2760</Text>
        </View>
        <Text style={styles.productDescription} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </View>
  );
};
DetailsInfo.PropTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
};
DetailsInfo.defaultProps = {
  title: 'Product Title',
  price: 'Product Price',
  description: 'description',
};
export default DetailsInfo;