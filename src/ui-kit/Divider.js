import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';

const Divider = (props) => <View style={{height: props.height}} />;

Divider.propTypes = {
  style: PropTypes.object,
  height: PropTypes.number,
};
Divider.defaultProps = {
  style: {},
  height: 5,
};

export default Divider;
