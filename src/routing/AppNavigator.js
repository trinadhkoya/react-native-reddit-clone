import React from 'react';
import {connect} from 'react-redux';
import MainNavigator from './MainNavigator';
import * as LoginActionCreators from '../redux/actions/login.actions';
import LoginContainer from '../LoginContainer';
import {bindActionCreators} from 'redux';

const AppNavigator = ({isLoggedIn}) => {
  return isLoggedIn ? <MainNavigator /> : <LoginContainer />;
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...LoginActionCreators}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
