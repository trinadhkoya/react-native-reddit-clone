import React, {PureComponent} from 'react';
import LoginPage from './LoginPage';
import {handleLogin} from './redux/actions/login.actions';
import {connect} from 'react-redux';
import {getProfile} from './redux/actions/profile.actions';
import {authorize} from 'react-native-app-auth';
import {config} from './services/reddit.service';
import {ACCESS_TOKEN, storage} from './utils/storage';

class LoginContainer extends PureComponent {
  onLogin = async () => {
    const token = await authorize(config);
    storage.set(ACCESS_TOKEN, token.accessToken);
    this.props.doLogin(token.accessToken);
    this.props.doGetUserInfo(token.accessToken);
  };
  render() {
    return <LoginPage onPressLogin={this.onLogin} />;
  }
}

LoginContainer.propTypes = {};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    TokenFromRedux: state.login.accessToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doLogin: (data) => dispatch(handleLogin(data)),
    doGetUserInfo: (token) => dispatch(getProfile(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);