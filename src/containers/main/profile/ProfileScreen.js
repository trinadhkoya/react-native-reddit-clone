import React from 'react';
import {connect} from 'react-redux';
import {getProfile} from '../../../redux/actions/profile.actions';
import ProfileHeader from './ProfileHeader';

const ProfileScreen = ({data}) => {
  return <ProfileHeader data={data} />;
};

const mapStateToProps = (state) => {
  return {
    data: state.aboutUser.data,
    postsData: state.myPosts.data,
    loading: state.aboutUser.loading,
    error: state.aboutUser.error,
    token: state.login.accessToken,
    isLoggedIn: state.login.isLoggedIn,
    userData: state.aboutUser.data,
    afterKey: state.myPosts.after,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: (token) => dispatch(getProfile(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
