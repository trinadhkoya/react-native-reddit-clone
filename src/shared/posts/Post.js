import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../theme/colors';
import PostHeaderSection from './PostHeaderSection';
import images from '../../res/images';
import {postCount} from '../../utils';
import {SCREEN_HT, SCREEN_WIDTH} from '../../screen.utils';

/* Implementation of lodash.get function */
function getProp(object, keys, defaultVal) {
  keys = Array.isArray(keys) ? keys : keys.split('.');
  object = object[keys[0]];
  if (object && keys.length > 1) {
    return getProp(object, keys.slice(1));
  }
  return object === undefined ? defaultVal : object;
}

const Post = ({item}) => {
  const mediaULR = getProp(item?.data, 'media?.reddit_video?.fallback_url');
  console.log(mediaULR);

  return (
    <View style={styles.container}>
      <PostHeaderSection post={item?.data} />
      <Text style={styles.mainTitle}>{item?.data?.title}</Text>

      <View style={styles.actionIconContainer}>
        <View style={{flexDirection: 'row'}}>
          <>
            <Image source={images.upvote} style={styles.actionIcon} />
            <Text style={styles.actionIconText}>
              {postCount(item?.data?.ups)}
            </Text>
          </>

          <>
            <Image source={images.downvote} style={styles.actionIcon} />
            <Text style={styles.actionIconText}>
              {postCount(item?.data?.downs)}
            </Text>
          </>
        </View>
        <>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Image source={images.comment} style={styles.actionIcon} />
            <Text style={styles.actionIconText}>
              {postCount(item?.data?.num_comments)}
            </Text>
          </TouchableOpacity>
        </>

        <>
          <Image source={images.share} style={styles.actionIcon} />
        </>
      </View>
      <>
        {/*{!item?.data?.is_video && (*/}
        {/*  <Video*/}
        {/*    playWhenInactive*/}
        {/*    ref={(ref) => {*/}
        {/*      this.player = ref;*/}
        {/*    }}*/}
        {/*    resizeMode={'contain'}*/}
        {/*    source={{*/}
        {/*      uri: getProp(item.data, 'media.reddit_video.fallback_url'),*/}
        {/*    }}*/}
        {/*    style={styles.backgroundVideo}*/}
        {/*  />*/}
        {/*)}*/}
      </>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
  },
  mainTitle: {
    fontSize: 18,
    paddingBottom: 3,
    color: colors.txtPrimary,
    fontWeight: '500',
  },
  actionIcon: {
    height: 20,
    width: 20,
    tintColor: '#a7a7a7',
  },
  actionIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    justifyContent: 'space-between',
    borderRadius: 10,
    flex: 1,
  },
  actionIconText: {
    paddingHorizontal: 5,
    fontSize: 12,
    alignSelf: 'center',
  },
  subRedditSec: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authSec: {flexDirection: 'row', alignItems: 'center', lineHeight: 18},
  namePrefix: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: '500',
  },
  authorText: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: '300',
  },
  backgroundVideo: {
    height: SCREEN_HT / 3,
    width: SCREEN_WIDTH,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
  },
});
