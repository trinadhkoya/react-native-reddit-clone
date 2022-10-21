import React from 'react';

import {connect} from 'react-redux';
import LoginPage from '../../../LoginPage';

import RedditPosts from './RedditPostsList';

const HomeScreen = ({dataJson, isLoggedIn}) => {
  return dataJson?.length !== 0 && isLoggedIn === true ? (
    <RedditPosts />
  ) : (
    <LoginPage />
  );
};

const mapStateToProps = ({homeFeed, login}) => {
  return {
    dataJson: homeFeed.data,
    error: homeFeed.error,
    isLoggedIn: login.isLoggedIn,
  };
};

export default connect(mapStateToProps, null)(HomeScreen);
