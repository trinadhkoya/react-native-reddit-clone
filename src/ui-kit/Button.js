import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {SCREEN_WIDTH} from 'utils/screen.utils';
import {Colors} from '../theme/Colors';

const Button = ({onPress, title}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  onPress: () => {},
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.8,
    height: 40,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: Colors.btnText,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default Button;
