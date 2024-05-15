import {ImageBackground, Text, View, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';
import PropTypes from 'prop-types';
const windowWidth = Dimensions.get('window').width;
const Product = props => {
  const {image} = props;
  return (
    <View style={styles.productContainer}>
      <ImageBackground
        borderRadius={windowWidth * 0.05}
        source={{
          uri: image,
        }}
        resizeMode="contain"
        style={styles.productImage}>
        <View style={styles.productSaleView}>
          <Text style={styles.productSaleText}>15%</Text>
        </View>
      </ImageBackground>
      <View style={styles.productLineView}>
        <View style={[styles.productLine, {backgroundColor: 'white'}]} />
        <View style={styles.productLine} />
        <View style={styles.productLine} />
        <View style={styles.productLine} />
        <View style={styles.productLine} />
      </View>
    </View>
  );
};

Product.PropTypes = {
  image: PropTypes.string,
};
Product.defaultProps = {
  image:
    'https://img.freepik.com/premium-photo/pair-tan-leather-shoes-with-brown-laces-sole-black-rubber-outs-against-white-background_197463-12566.jpg?w=826',
};

export default Product;
