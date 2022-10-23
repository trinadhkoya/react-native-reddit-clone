import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Colors} from 'theme/Colors';
import {SCREEN_WIDTH} from 'utils/screen.utils';

const FilterView = (props) => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    <Text style={styles.text}>{props.value}</Text>
  </TouchableOpacity>
);

FilterView.propTypes = {
  value: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    width: SCREEN_WIDTH * 0.3,
    height: 40,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: Colors.primaryColor,
    borderWidth: 1,
  },
  text: {
    color: Colors.primaryColor,
    textAlign: 'center',
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontSize: 16,
  },
});

export default FilterView;
