import React, {useEffect} from 'react';

import {connect} from 'react-redux';
import LoginPage from '../../LoginPage';

import RedditPosts from './RedditPostsList';

const HomeScreen = ({posts}) => {
  useEffect(() => {}, [posts]);
  return posts ? <RedditPosts /> : <LoginPage />;
};

const mapStateToProps = (state) => {
  return {
    posts: state.homeFeed.data,
    error: state.homeFeed.error,
    isLoggedIn: state.login.isLoggedIn,
  };
};

export default connect(mapStateToProps, null)(HomeScreen);
