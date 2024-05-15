import {SafeAreaView, View} from 'react-native';
import React from 'react';
import {data} from '../../assets/Contans';
import styles from './styles';
import {ArrivialList, Header2, List} from '../../components';
const index = props => {
  const {navigation} = props;
  const handleNavigation2 = item => {
    navigation.navigate('Details', item);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header2 title="All Products" navigation={navigation} />
        <View style={styles.productsView}>
          <List
            navigation={navigation}
            data={data}
            onPress={handleNavigation2}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
