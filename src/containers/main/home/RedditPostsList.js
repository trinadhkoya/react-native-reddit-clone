import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';

import {connect} from 'react-redux';
import {fetchData} from '../../../redux/actions/homefeed.actions';

import Post from '../../../shared/posts/Post';

const _ItemSeparatorComponent = () => <View style={{height: 7}} />;
const renderItem = ({index, item}) => <Post item={item} />;

const RedditPostsList = ({
  fetchDataFromApi,
  dataJson,
  loading,
  error,
  afterKey,
  token,
  fetchDataFromApiNextPage,
}) => {
  useEffect(() => {
    fetchDataFromApi(token);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      {error ? (
        <Text style={{alignSelf: 'center'}}>{error.message}</Text>
      ) : (
        <View />
      )}

      <FlatList
        refreshControl={
          <RefreshControl
            onRefresh={() => fetchDataFromApi(token)}
            refreshing={loading}
          />
        }
        ListFooterComponent={() => {
          return loading ? (
            <View style={{marginVertical: 15}}>
              <ActivityIndicator />
            </View>
          ) : (
            <View />
          );
        }}
        data={dataJson}
        renderItem={renderItem}
        ItemSeparatorComponent={_ItemSeparatorComponent}
        removeClippedSubviews={true}
        onEndReachedThreshold={1}
        keyExtractor={(item, index) => index.toString()}
        maxToRenderPerBatch={5}
        initialNumToRender={5}
        windowSize={10}
        onEndReached={() => {
          // if (!loading) {
          //   fetchDataFromApiNextPage(afterKey, token);
          // }
        }}
      />
    </View>
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
