import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ListItem from '../ListItem/ListItem';
import PropTypes from 'prop-types';
const List = props => {
  const {data, navigation} = props;
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Details', {...item});
            }}>
            <ListItem item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

List.propTypes = {
  data: PropTypes.array,
};

List.defaultProps = {
  data: [],
};
export default List;

const styles = StyleSheet.create({});
