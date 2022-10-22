import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const HeadDesc = (props) => {
  return (
    <View style={{flexDirection: 'column', alignItems: 'center'}}>
      <Text style={styles.head}>{props.headerName}</Text>
      <Text style={styles.value}>{props.headerValue}</Text>
    </View>
  );
};

HeadDesc.propTypes = {
  headerName: PropTypes.string.isRequired,
  headerValue: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', alignItems: 'center',
  },
  head: {
    fontSize: 15, fontWeight: '500',
  },
  value: {
    fontSize: 16, fontWeight: '500',
  },
});
export default HeadDesc;
