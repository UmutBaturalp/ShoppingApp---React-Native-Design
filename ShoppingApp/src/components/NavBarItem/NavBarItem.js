import {Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import myIcons from '../../assets/Icons';
import PropTypes from 'prop-types';

const NavBarItem = props => {
  const {itemName, isActivity} = props;
  return (
    <View>
      <View style={styles.navBarItem}>
        <Image
          tintColor={isActivity ? 'white' : 'gray'}
          source={myIcons[itemName]}
          style={styles.navBarIcon}
        />
        <Text
          style={[styles.navBarText, {color: isActivity ? 'white' : 'gray'}]}>
          {itemName}
        </Text>
      </View>
    </View>
  );
};
NavBarItem.PropTypes = {
  itemName: PropTypes.string,
  isActivity: PropTypes.bool,
};

NavBarItem.defaultProps = {
  itemName: 'Home',
  isActivity: false,
};

export default NavBarItem;
