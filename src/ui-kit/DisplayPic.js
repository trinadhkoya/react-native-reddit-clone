import PropTypes from 'prop-types';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {getProp} from 'utils';

const PLACEHOLDER_IMG = 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png';

const DisplayPic = ({avatarInfo}) => {
  const avatarURL = getProp(avatarInfo, 'subreddit?.icon_img', PLACEHOLDER_IMG);
  const userName = getProp(avatarInfo, 'name', 'Guest');

  return (
    <View style={styles.container}>
      <Image
        source={{uri: avatarURL}}
        style={styles.avatar}
      />
      <Text style={styles.username}>{userName}</Text>
    </View>
  );
};
DisplayPic.propTypes = {
  avatarInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginVertical: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 36,
  },
});
export default DisplayPic;
