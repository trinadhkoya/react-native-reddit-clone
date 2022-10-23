import React, {useEffect} from 'react';

import {connect} from 'react-redux';
import LoginPage from 'screens/auth/LoginPage';

import HomeScreen from 'screens/home/HomeScreen';
import {fetchPosts} from 'redux/actions/posts.actions';

const HomeScreenContainer = (props) => {
  useEffect(() => {
    props.getPosts();
  }, []);

  return props.posts ? <HomeScreen {...props} /> : <LoginPage />;
};

const mapStateToProps = ({homeFeed, login}) => {
  return {
    posts: homeFeed.data,
    isLoading: homeFeed.isLoading,
    error: homeFeed.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreenContainer);
