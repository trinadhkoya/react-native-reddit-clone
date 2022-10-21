import {Image, StyleSheet, Text, View} from 'react-native';
import {postCount} from '../utils';
import React from 'react';
import PropTypes from 'prop-types';
import images from '../res/images';

const IconText = props => {
  const {icon, value} = props;
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.actionIcon} />
      <Text style={styles.actionIconText}>
        {postCount(value)}
      </Text>
    </View>
  );
};
IconText.propTypes = {
  icon: PropTypes.number,
  value: PropTypes.string,
};
IconText.defaultProps = {
  icon: images.home,
  value: '',
};
const styles=StyleSheet.create({
  container:{
    flexDirection:'row',justifyContent:'center'
  },
  actionIconText: {
    paddingHorizontal: 5,
    fontSize: 12,
    alignSelf: 'center',
  },
  actionIcon: {
    height: 20,
    width: 20,
    tintColor: '#a7a7a7',
  },
})

export default IconText;
