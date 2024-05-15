import {Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
const ArrivialItem = props => {
  const {item} = props;
  return (
    <View>
      <View style={styles.newArrivalsItem}>
        <Image
          resizeMode="cover"
          source={{
            uri: item.image,
          }}
          style={styles.newArrivalsImage}
        />
        <View style={styles.newArrivalsInfo}>
          <Text numberOfLines={2} style={styles.newArrivalsTitle}>
            {item.title}
          </Text>
          <Text style={styles.newArrivalsPrice}>AED {item.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default ArrivialItem;
