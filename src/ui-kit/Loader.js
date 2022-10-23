import PropTypes from 'prop-types';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Colors} from 'theme/Colors';

const Loader = ({size, isLoading, color}) => {
  return (
    isLoading && (
      <View style={styles.container}>
        <ActivityIndicator size={size} color={color} />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
});
Loader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
Loader.defaultProps = {
  color: Colors.primaryColor,
  size: PropTypes.oneOf(['large', 'small']),
};
export default Loader;
