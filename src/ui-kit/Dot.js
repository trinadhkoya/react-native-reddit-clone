import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../theme/colors';

const Dot = () => <View style={styles.container} />;

Dot.propTypes = {};
const styles = StyleSheet.create({
  container: {
    width: 4,
    height: 4,
    marginHorizontal: 3,
    backgroundColor: colors.textSecondary,
    borderRadius: 2,
  },
});

export default Dot;
