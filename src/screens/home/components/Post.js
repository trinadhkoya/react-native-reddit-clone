import images from 'assets/images';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'theme/Colors';
import IconText from 'ui-kit/IconText';
import {postCount} from 'utils';
import {SCREEN_HT, SCREEN_WIDTH} from 'utils/screen.utils';
import PostHeaderSection from './PostHeaderSection';

const Post = ({item}) => {
  return (
    <View style={styles.container}>
      {/** START OF HEADER SEC**/}
      <PostHeaderSection post={item?.data} />
      <Text style={styles.mainTitle}>{item?.data?.title}</Text>
      {/** START OF RE-ACTIONS SEC**/}
      <View style={styles.actionIconContainer}>
        <View style={{flexDirection: 'row'}}>
          <React.Fragment>
            <IconText icon={images.upvote} value={postCount(item?.data?.ups)} />
            <IconText
              icon={images.downvote}
              value={postCount(item?.data?.downs)}
            />
          </React.Fragment>
          <IconText data={item?.data} icon={images.comment} />
        </View>
        <React.Fragment>
          <IconText
            icon={images.comment}
            value={postCount(item?.data?.num_comments)}
          />
        </React.Fragment>
        <React.Fragment>
          <Image source={images.share} style={styles.actionIcon} />
        </React.Fragment>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
  },
  mainTitle: {
    fontSize: 18,
    paddingBottom: 3,
    color: Colors.txtPrimary,
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
    color: Colors.textSecondary,
    fontSize: 14,
    fontWeight: '500',
  },
  authorText: {
    color: Colors.textSecondary,
    fontSize: 14,
    fontWeight: '300',
  },
  backgroundVideo: {
    height: SCREEN_HT * 0.2,
    width: SCREEN_WIDTH,
    zIndex: -1,
  },
  bgMedia: {
    height: SCREEN_HT * 0.2,
    width: SCREEN_WIDTH,
    resizeMode: 'cover',
  },
});
