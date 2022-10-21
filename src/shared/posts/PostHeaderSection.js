import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Dot from '../../ui-kit/Dot';
import {colors} from '../../theme/colors';
import PropTypes from 'prop-types';
import {getReadableTime} from '../../utils';

const PostHeaderSection = (props) => (
  <>
    <View style={styles.subRedditSec}>
      <Text style={styles.namePrefix}>{`r\\${props.post?.subreddit}`}</Text>
    </View>

    <View style={styles.authSec}>
      <Text style={styles.authorText}>{`u\\${props.post?.author}`}</Text>
      <Dot />
      <Text style={{color: colors.textSecondary}}>
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
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: '500',
  },
  authorText: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: '300',
  },
});
export default PostHeaderSection;
