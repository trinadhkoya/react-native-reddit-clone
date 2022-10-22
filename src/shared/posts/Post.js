import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../theme/Colors';
import PostHeaderSection from './PostHeaderSection';
import images from '../../res/images';
import {postCount} from '../../utils';
import {SCREEN_HT, SCREEN_WIDTH} from '../../screen.utils';
import Video from 'react-native-video';
import IconText from '../../ui-kit/IconText';


const Post = ({item, shouldShow}) => {

  return (
    <View style={styles.container}>
      <PostHeaderSection post={item?.data} />
      <Text style={styles.mainTitle}>{item?.data?.title}</Text>
      <React.Fragment>
        {shouldShow && (<Video
          ref={(ref) => {
            this.player = ref;
          }}
          resizeMode={'contain'}
          source={{
            uri: 'https://v.redd.it/cg4wkwi9p2v91/DASH_1080.mp4?source=fallback',
          }}
          style={styles.backgroundVideo}
        />)}

        {/*{shouldShow ? (*/}
        {/*  <Video*/}
        {/*    ref={(ref) => {*/}
        {/*      this.player = ref;*/}
        {/*    }}*/}
        {/*    resizeMode={'contain'}*/}
        {/*    source={{*/}
        {/*      uri: 'https://v.redd.it/cg4wkwi9p2v91/DASH_1080.mp4?source=fallback',*/}
        {/*    }}*/}
        {/*    style={styles.backgroundVideo}*/}
        {/*  />*/}
        {/*) : <Image source={{uri: mediaULR}} style={styles.bgMedia} />}*/}
      </React.Fragment>

      <View style={styles.actionIconContainer}>
        <View style={{flexDirection: 'row'}}>
          <React.Fragment>
            <IconText icon={images.upvote} value={postCount(item?.data?.ups)}></IconText>
            <IconText icon={images.downvote} value={postCount(item?.data?.downs)}></IconText>
          </React.Fragment>
          <IconText data={item?.data} icon={images.comment} />
        </View>
        <React.Fragment>
          <IconText icon={images.comment} value={postCount(item?.data?.num_comments)}></IconText>
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
    zIndex: -1,
    resizeMode: 'cover',
  },
});
