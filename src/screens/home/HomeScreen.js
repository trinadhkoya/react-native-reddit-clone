import {
  InCenterConsumer,
  IndexProvider,
  OffsetYProvider,
} from '@n1ru4l/react-in-center-of-screen';
import React from 'react';
import {FlatList} from 'react-native';
import {SCREEN_HT, SCREEN_WIDTH} from 'utils/screen.utils';

import Post from 'screens/home/components/Post';
import {Colors} from 'theme/Colors';
import Divider from 'ui-kit/Divider';
import Loader from 'ui-kit/Loader';

const listItemHeight = SCREEN_WIDTH / 3;
const centerYStart = SCREEN_HT / 5;
const centerYEnd = (SCREEN_HT * 2) / 3;

const _ItemSeparatorComponent = () => <Divider height={10} />;

const HomeScreen = (props) => {
  const renderListFooter = () => (
    <Loader
      isLoading={props.isLoading}
      size={'large'}
      color={Colors.primaryColor}
    />
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
          data={props.posts}
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

export default HomeScreen;
