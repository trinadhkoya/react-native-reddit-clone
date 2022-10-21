import React, {useEffect} from 'react';
import {FlatList} from 'react-native';

import {connect} from 'react-redux';

import Post from '../../../shared/posts/Post';
import Divider from '../../../ui-kit/Divider';
import {fetchData} from '../../../redux/actions/homefeed.actions';
import Loader from '../../../ui-kit/Loader';
import {colors} from '../../../theme/colors';

const _ItemSeparatorComponent = () => <Divider height={10} />;
const renderItem = ({index, item}) => (
  <Post key={index.toString()} item={item} />
);

const RedditPostsList = ({fetchDataFromApi, dataJson, loading, token}) => {
  useEffect(() => {
    fetchDataFromApi(token);
  }, []);

  const renderListFooter = () => (
    <Loader isLoading={loading} color={colors.primaryColor} />
  );

  return (
    <>
      <FlatList
        ListFooterComponent={renderListFooter}
        data={dataJson}
        renderItem={renderItem}
        ItemSeparatorComponent={_ItemSeparatorComponent}
        removeClippedSubviews={true}
        onEndReachedThreshold={0.6}
        keyExtractor={(item, index) => index.toString()}
        maxToRenderPerBatch={5}
        initialNumToRender={5}
        windowSize={10}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    dataJson: state.homeFeed.data,
    loading: state.homeFeed.loading,
    error: state.homeFeed.error,
    afterKey: state.homeFeed.after,
    token: state.login.accessToken,
    isLoggedIn: state.login.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataFromApi: (token) => dispatch(fetchData(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RedditPostsList);
