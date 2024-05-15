import {
  FlatList,
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;
import ArrivialItem from '../ArrivalItem/ArrivialItem';

const ArrivialList = props => {
  const {data, navigation, route} = props;

  return (
    <View style={styles.newArrivalsList}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Details', {...item});
            }}>
            <ArrivialItem item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ArrivialList;

const styles = StyleSheet.create({
  newArrivalsList: {
    marginLeft: windowWidth * 0.025,
    height: windowHeight * 0.25,
    flexDirection: 'row',
  },
});
