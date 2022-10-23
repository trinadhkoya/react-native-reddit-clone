import React, {useEffect} from 'react';

import {connect} from 'react-redux';
import LoginPage from 'screens/auth/LoginPage';

import HomeScreen from 'screens/home/HomeScreen';
import {fetchPosts} from 'redux/actions/posts.actions';

const HomeScreenContainer = (props) => {
  useEffect(() => {
    props.getPosts();
  }, []);

  const onFilterByCategory = (val) => {
    props.getPosts(val);
  };

  return props.posts ? (
    <HomeScreen {...props} onFilterByCategory={onFilterByCategory} />
  ) : (
    <LoginPage />
  );
};

const mapStateToProps = ({homeFeed}) => {
  return {
    posts: homeFeed.data,
    isLoading: homeFeed.isLoading,
    error: homeFeed.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (val) => dispatch(fetchPosts(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreenContainer);
