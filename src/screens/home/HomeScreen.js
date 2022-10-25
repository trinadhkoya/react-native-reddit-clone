import {InCenterConsumer, IndexProvider, OffsetYProvider,} from '@n1ru4l/react-in-center-of-screen';
import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import {SCREEN_HT, SCREEN_WIDTH} from 'utils/screen.utils';

import Post from 'screens/home/components/Post';
import {Colors} from 'theme/Colors';
import Divider from 'ui-kit/Divider';
import Loader from 'ui-kit/Loader';
import Video from 'react-native-video';
import FilterView from 'ui-kit/FilterView';
import filters from 'data/filters';

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

  const filterByTitle = (val) => {
    props.onFilterByCategory(val);
  };

  if (props.isLoading) {
    return <Loader isLoading={props.isLoading} size={'large'} />;
  }

  return (
    <React.Fragment>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: 20}}>
        {filters.map((filter, index) => {
          return (
            <FilterView
              key={index.toString()}
              value={filter.value}
              onPress={() => filterByTitle(filter.value)}
            />
          );
        })}
      </ScrollView>

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
                {() =>
                  item?.data?.is_video ? (
                    <InCenterConsumer>
                      {({isInCenter}) => (
                        <Video
                          resizeMode={'contain'}
                          controls={false}
                          source={{
                            uri: item?.data?.media?.reddit_video?.fallback_url,
                          }}
                          style={{
                            height: SCREEN_HT * 0.25,
                            width: SCREEN_WIDTH,
                          }}
                          paused={!isInCenter}
                        />
                      )}
                    </InCenterConsumer>
                  ) : (
                    <Post item={item} />
                  )
                }
              </IndexProvider>
            )}
            ItemSeparatorComponent={_ItemSeparatorComponent}
            removeClippedSubviews
            onEndReachedThreshold={1}
            keyExtractor={(item, index) => index.toString()}
            maxToRenderPerBatch={5}
            initialNumToRender={5}
            scrollEventThrottle={16}
            windowSize={10}
          />
        )}
      </OffsetYProvider>
    </React.Fragment>
  );
};

export default HomeScreen;
