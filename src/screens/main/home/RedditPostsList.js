import React, {useEffect} from 'react';
import {FlatList} from 'react-native';

import {connect} from 'react-redux';

import Post from '../../../shared/posts/Post';
import Divider from '../../../ui-kit/Divider';
import {fetchData} from '../../../redux/actions/homefeed.actions';
import Loader from '../../../ui-kit/Loader';
import {Colors} from '../../../theme/Colors';
import {InCenterConsumer, IndexProvider, OffsetYProvider} from '@n1ru4l/react-in-center-of-screen';
import {SCREEN_HT, SCREEN_WIDTH} from '../../../screen.utils';


const centerYStart = SCREEN_HT / 2;
const centerYEnd = (SCREEN_HT * 3) / 5;
const listItemHeight = SCREEN_WIDTH / 2;

const _ItemSeparatorComponent = () => <Divider height={10} />;

const RedditPostsList = ({fetchDataFromApi, dataJson, loading, token}) => {

  useEffect(() => {
    fetchDataFromApi(token);
  }, []);

  const renderListFooter = () => (
    <Loader isLoading={loading} color={Colors.primaryColor} />
  );

  return (
    <OffsetYProvider
      columnsPerRow={1}
      listItemHeight={listItemHeight}
      centerYStart={centerYStart}
      centerYEnd={centerYEnd}>
      {({setOffsetY}) => (
        <FlatList
          ListFooterComponent={renderListFooter}
          onScroll={(ev) => {
            setOffsetY(ev.nativeEvent.contentOffset.y);
          }}
          data={dataJson}
          renderItem={({index, item}) => (
            <IndexProvider index={index}>
              {() => {
                return (
                  <InCenterConsumer>
                    {({isInCenter}) => (
                      <Post item={item} shouldShow={isInCenter} />
                    )}
                  </InCenterConsumer>

                );
              }}
            </IndexProvider>
          )}
          ItemSeparatorComponent={_ItemSeparatorComponent}
          removeClippedSubviews={true}
          onEndReachedThreshold={0.6}
          keyExtractor={(item, index) => index.toString()}
          maxToRenderPerBatch={5}
          initialNumToRender={5}
          scrollEventThrottle={16}
          windowSize={10}
        />
      )}
    </OffsetYProvider>
  );
};

const mapStateToProps = ({homeFeed, login}) => {
  return {
    dataJson: homeFeed.data,
    loading: homeFeed.loading,
    error: homeFeed.error,
    afterKey: homeFeed.after,
    token: login.accessToken,
    isLoggedIn: login.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataFromApi: (token) => dispatch(fetchData(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RedditPostsList);
