import {Text, TouchableOpacity, View} from 'react-native';
import {authorize} from 'react-native-app-auth';
import {connect} from 'react-redux';
import React from 'react';
import {handleLogin, handleLogout} from './redux/actions/login.actions';
import {fetchData} from './redux/actions/homefeed.actions';
import Button from './ui-kit/Button';
import {config} from './services/reddit.service';
import {HTTPClient} from './services/http-client';

function UserLogin({
  isLoggedIn,
  userLogin,
  fetchDataFromApi,
  userLogout,
  fetchAboutUser,
}) {
  // Log in to get an authentication token
  const onPressLogin = async () => {
    const token = await authorize(config);
    HTTPClient.defaults.headers[
      'Authorization'
    ] = `Bearer ${token.accessToken}`;
    await fetchAboutUser(token.accessToken);
    userLogin(token.accessToken);
    fetchDataFromApi(token.accessToken);
  };

  return (
    <>
      {isLoggedIn ? (
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => userLogout()}
            style={{
              width: 80,
              height: 25,
              borderRadius: 100,
              backgroundColor: 'red',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{alignItems: 'center'}}>
          <Button title={'Login with reddit'} onPress={onPressLogin} />
        </View>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    TokenFromRedux: state.login.accessToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (data) => dispatch(handleLogin(data)),
    fetchDataFromApi: (afterKey, dataJson, token) =>
      dispatch(fetchData(afterKey, dataJson, token)),
    userLogout: () => dispatch(handleLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
