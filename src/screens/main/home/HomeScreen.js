import React, {useEffect} from 'react';

import {connect} from 'react-redux';
import LoginPage from '../../LoginPage';

import RedditPosts from './RedditPostsList';

const HomeScreen = ({posts}) => {
  useEffect(() => {}, [posts]);
  return posts ? <RedditPosts /> : <LoginPage />;
};

const mapStateToProps = ({homeFeed, login}) => {
  return {
    posts: homeFeed.data,
    error: homeFeed.error,
    isLoggedIn: login.isLoggedIn,
  };
};

export default connect(mapStateToProps, null)(HomeScreen);
