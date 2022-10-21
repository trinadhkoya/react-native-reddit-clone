import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../../../../redux/actions/homefeed.actions';
import {handleLogin} from '../../../../redux/actions/login.actions';

const HomeHeaderSearch = ({TokenFromRedux, userLogin, fetchDataFromApi}) => {
  return <SafeAreaView></SafeAreaView>;
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    TokenFromRedux: state.login.accessToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (data) => dispatch(handleLogin(data)),
    fetchDataFromApi: (afterKey, dataJson, token, data) =>
      dispatch(fetchData(afterKey, dataJson, token, data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeHeaderSearch);

const Styles = StyleSheet.create({});
