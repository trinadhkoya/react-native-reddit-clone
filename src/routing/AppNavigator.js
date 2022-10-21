import React from 'react';
import {connect} from 'react-redux';
import MainNavigator from './MainNavigator';
import {userLogin, userLogout} from '../redux/actions/login.actions';
import LoginContainer from '../LoginContainer';

const AppNavigator = ({isLoggedIn}) => {
  return isLoggedIn ? <MainNavigator /> : <LoginContainer />;
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(userLogin()),
    logout: () => dispatch(userLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
