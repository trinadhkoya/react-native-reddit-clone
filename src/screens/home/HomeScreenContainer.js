import React, {useEffect} from 'react';

import {connect} from 'react-redux';
import LoginPage from 'screens/auth/LoginPage';

import RedditPosts from 'screens/home/HomeScreen';

const HomeScreenContainer = ({posts}) => {
  useEffect(() => {
  }, [posts]);
  return posts ? <RedditPosts /> : <LoginPage />;
};

const mapStateToProps = ({homeFeed, login}) => {
  return {
    posts: homeFeed.data,
    error: homeFeed.error,
    isLoggedIn: login.isLoggedIn,
  };
};

export default connect(mapStateToProps, null)(HomeScreenContainer);
