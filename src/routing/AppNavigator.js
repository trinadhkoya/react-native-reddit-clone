import React from 'react';
import {connect} from 'react-redux';
import MainNavigator from './MainNavigator';
import * as LoginActionCreators from '../redux/actions/login.actions';
import LoginContainer from '../screens/main/auth/LoginContainer';
import {bindActionCreators} from 'redux';
import useIsAuthenticated from '../hooks/useLoggedIn';

const AppNavigator = ({isLoggedIn}) => {
  const [token] = useIsAuthenticated(isLoggedIn);

  return token ? <MainNavigator /> : <LoginContainer />;
};

const mapStateToProps = ({login}) => {
  return {
    isLoggedIn: login.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...LoginActionCreators}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
