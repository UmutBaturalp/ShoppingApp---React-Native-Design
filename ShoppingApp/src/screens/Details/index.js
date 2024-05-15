import {View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {
  DetailsInfo,
  Header,
  Product,
  SizeColor,
  AddCartArea,
  AddModal,
  Header2,
} from '../../components';
const index = props => {
  const {navigation, route} = props;
  const {image, title, price, description} = route.params;
  const infos = {
    image: image,
    title: title,
    price: price,
    description: description,
  };

  const [amount, setAmount] = useState(0);
  const [isFav, setIsFav] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const onPress = () => {
    setIsFav(!isFav);
  };

  const addFunc = () => {
    setAmount(amount + 1);
  };
  const interestFunc = () => {
    if (amount >= 1) {
      setAmount(amount - 1);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header2 title="Details" navigation={navigation} />
        <Product image={image} />
        <DetailsInfo
          isActive={isFav}
          onPress={onPress}
          title={title}
          description={description}
          price={price}
        />
        <SizeColor />
        <AddCartArea
          amount={amount}
          addFunc={addFunc}
          interestFunc={interestFunc}
          modalFunc={() => setModalVisible(!modalVisible)}
        />
      </View>
      <AddModal
        infos={infos}
        amount={amount}
        addFunc={addFunc}
        interestFunc={interestFunc}
        modalFunc={() => setModalVisible(!modalVisible)}
        modalVisible={modalVisible}
      />
    </SafeAreaView>
  );
};
export default index;
