import React from 'react';
import {connect} from 'react-redux';
import * as profileActionCreators from '../../../redux/actions/profile.actions';
import ProfileHeader from './ProfileHeader';
import {bindActionCreators} from 'redux';

const ProfileScreen = ({data}) => {
  return <ProfileHeader data={data} />;
};

const mapStateToProps = (state) => {
  return {
    data: state.profile.data,
    loading: state.profile.loading,
    error: state.profile.error,
    token: state.login.accessToken,
    isLoggedIn: state.login.isLoggedIn,
    userData: state.profile.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...profileActionCreators}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
