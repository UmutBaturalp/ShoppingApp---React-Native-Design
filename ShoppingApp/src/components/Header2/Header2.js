import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;
import myIcons from '../../assets/Icons/index';
import PropTypes from 'prop-types';
const Header2 = props => {
  const {title, navigation} = props;
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image
            source={myIcons.back}
            style={styles.headerIcon}
            tintColor={'white'}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
        <View style={styles.headerIcon}></View>
      </View>
    </View>
  );
};

Header2.propTypes = {
  title: PropTypes.string,
};

Header2.defaultProps = {
  title: 'Title',
};

export default Header2;

const styles = StyleSheet.create({
  header: {
    width: windowWidth,
    height: windowHeight * 0.1,
    backgroundColor: 'black',
    borderBottomRightRadius: windowWidth * 0.08,
    borderBottomLeftRadius: windowWidth * 0.08,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.05,
    flexDirection: 'row',
  },

  headerText: {
    color: 'white',
    fontSize: windowWidth * 0.05,
    fontWeight: '700',
    alignSelf: 'center',
  },

  headerIcon: {
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
  },
});
