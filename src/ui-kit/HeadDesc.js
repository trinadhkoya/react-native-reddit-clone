import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeadDesc = ({headerName = '', headerValue = ''}) => {
  return (
    <View style={{flexDirection: 'column', alignItems: 'center'}}>
      <Text style={styles.head}>{headerName}</Text>
      <Text style={styles.value}>{headerValue}</Text>
    </View>
  );
};

HeadDesc.propTypes = {
  headerName: PropTypes.string,
  headerValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  head: {
    fontSize: 15,
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
  },
});
export default HeadDesc;
