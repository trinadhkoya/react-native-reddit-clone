import React, {PureComponent} from 'react';
import LoginPage from './LoginPage';
import {handleLogin} from './redux/actions/login.actions';
import {fetchData} from './redux/actions/homefeed.actions';
import {connect} from 'react-redux';
import {getProfile} from './redux/actions/profile.actions';
import {authorize} from 'react-native-app-auth';
import {config} from './services/reddit.service';
import axios from 'axios';

class LoginContainer extends PureComponent {
  onLogin = async () => {
    const token = await authorize(config);
    axios.defaults.headers.Authorization = `Bearer ${token.accessToken}`;
    this.props.doLogin(token.accessToken);
    this.props.doGetUserInfo(token.accessToken);
    this.props.doFetchPosts(token.accessToken);
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
    doFetchPosts: (afterKey, dataJson, token) =>
      dispatch(fetchData(afterKey, dataJson, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
