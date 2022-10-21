import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from './theme/colors';
import Button from './ui-kit/Button';
import PropTypes from 'prop-types';

const LoginPage = ({onPressLogin}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./res/images/redditLogo.png')}
        style={styles.brandImg}
      />
      <Text style={styles.themeText}>Dive into anything</Text>
      <Button title={'Login with reddit'} onPress={onPressLogin} />
    </View>
  );
};

LoginPage.propTypes = {
  onPressLogin: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.btnPrimary,
  },
  brandImg: {
    width: '30%',
    height: '30%',
    resizeMode: 'contain',
  },
  themeText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default LoginPage;
