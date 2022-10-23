import PropTypes from 'prop-types';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'theme/Colors';
import Button from 'ui-kit/Button';

const LoginPage = ({onPressLogin = undefined}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/redditLogo.png')}
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
    backgroundColor: Colors.btnPrimary,
  },
  brandImg: {
    width: '30%',
    height: '30%',
    resizeMode: 'contain',
  },
  themeText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: Colors.white,
  },
});

export default LoginPage;
