import {SafeAreaView, View, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {data, data2} from '../../assets/Contans';
import {
  Header,
  ProductView,
  SeeAllView,
  ArrivialList,
  NavBar,
} from '../../components';
const Home = props => {
  const {navigation} = props;
  const handleNavigation = () => {
    navigation.navigate('AllProducts');
  };
  const handleNavigation2 = () => {
    navigation.navigate('Details');
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Header />
          <ProductView data={data2} navigation={navigation} />
          <SeeAllView onPress={handleNavigation} />
          <ArrivialList data={data} navigation={navigation} />
          <SeeAllView itemName={'Most Released'} onPress={handleNavigation} />
          <ArrivialList navigation={navigation} data={data2} />
        </ScrollView>
      </View>
      <NavBar />
    </SafeAreaView>
  );
};

export default Home;
