import React, {useEffect} from 'react';

import {connect, useDispatch} from 'react-redux';

import HomeScreen from 'screens/home/HomeScreen';
import {fetchPostsRequest} from 'redux/actions/posts.actions';

const HomeScreenContainer = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

  const onFilterByCategory = (val) => {
    dispatch(fetchPostsRequest(val));
  };

  return <HomeScreen {...props} onFilterByCategory={onFilterByCategory} />;
};

const mapStateToProps = ({homeFeed}) => {
  return {
    posts: homeFeed.data,
    isLoading: homeFeed.isLoading,
    error: homeFeed.error,
  };
};

export default connect(mapStateToProps)(HomeScreenContainer);
