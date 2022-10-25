import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {authorize} from 'react-native-app-auth';
import {connect} from 'react-redux';
import {fetchProfileRequest} from 'redux/actions/profile.actions';
import LoginPage from 'screens/auth/LoginPage';
import {config} from 'services/reddit.service';
import {ACCESS_TOKEN, storage} from 'utils/storage.utils';
import {userLogin} from "redux/actions/login.actions";

class LoginContainer extends PureComponent {
  onLogin = async () => {
    const token = await authorize(config);
    await storage.set(ACCESS_TOKEN, token.accessToken);
    this.props.doLogin(token);
    this.props.doGetUserInfo();
  };

  render() {
    return <LoginPage onPressLogin={this.onLogin} />;
  }
}

LoginContainer.propTypes = {
  doLogin: PropTypes.func,
  doGetUserInfo: PropTypes.func,
};

LoginContainer.defaultProps = {
  doLogin: () => {},
  doGetUserInfo: () => {},
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    TokenFromRedux: state.login.accessToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doLogin: (data) => dispatch(userLogin(data)),
    doGetUserInfo: () => dispatch(fetchProfileRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
