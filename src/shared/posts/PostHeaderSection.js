import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Dot from '../../ui-kit/Dot';
import {Colors} from '../../theme/Colors';
import PropTypes from 'prop-types';
import {getReadableTime} from '../../utils';

const PostHeaderSection = (props) => (
  <>
    <View style={styles.subRedditSec}>
      <Text style={styles.namePrefix}>
        {props?.post?.subreddit_name_prefixed}
      </Text>
    </View>

    <View style={styles.authSec}>
      <Text style={styles.authorText}>{props.post?.author_fullname}</Text>
      <Dot />
      <Text style={styles.time}>
        {getReadableTime(props.post?.created_utc)}
      </Text>
    </View>
  </>
);

PostHeaderSection.defaultProps = {
  post: {},
};
PostHeaderSection.propTypes = {
  post: PropTypes.shape({
    created_utc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    author: PropTypes.string,
    subreddit: PropTypes.string,
  }),
};

const styles = StyleSheet.create({
  subRedditSec: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authSec: {flexDirection: 'row', alignItems: 'center', lineHeight: 18},
  namePrefix: {
    color: Colors.textSecondary,
    fontSize: 15,
    fontWeight: '500',
  },
  authorText: {
    color: Colors.textSecondary,
    fontSize: 14,
    fontWeight: '400',
  },
  time: {
    color: Colors.textSecondary,
  },
});
export default PostHeaderSection;
