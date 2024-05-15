import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';

const ProductView = props => {
  const {navigation, data} = props;
  const [newObj, setNewObj] = useState(data[0]);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCounter((counter + 1) % data.length);
    }, 1500);
    setNewObj(data[counter]);
  }, [counter]);
  return (
    <View style={styles.productContainer}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('Details', {
            title: newObj.title,
            image: newObj.image,
            price: newObj.price,
            description: newObj.description,
          });
        }}>
        <View style={styles.productView}>
          <View style={styles.productInfoView}>
            <View style={styles.productTitleView}>
              <Text numberOfLines={3} style={styles.productTitle}>
                {newObj?.title}
              </Text>
            </View>
            <Text style={styles.productPrice}>AED {newObj?.price}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Details', {
                title: newObj.title,
                image: newObj.image,
                price: newObj.price,
                description: newObj.description,
              });
            }}
            activeOpacity={0.6}
            style={styles.productButton}>
            <Text style={styles.productButtonText}>Show Now</Text>
          </TouchableOpacity>
          <Image
            source={{
              uri: newObj?.image,
            }}
            style={styles.productImage}
          />
          <View style={styles.productSale}>
            <Text style={styles.productSaleText}>15%</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.productLineView}>
        {data.map((item, index) => {
          return (
            <View
              style={[
                styles.productLine,
                counter === index ? {backgroundColor: 'white'} : null,
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default ProductView;
