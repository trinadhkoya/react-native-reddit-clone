import PropTypes from 'prop-types';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const PLACEHOLDER_IMG = 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png';

const DisplayPic = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: props.icon_img}}
        style={styles.avatar}
      />
      <Text style={styles.username}>{props.display_name}</Text>
    </View>
  );
};
DisplayPic.defaultProps = {
  display_name: 'guest',
  icon_img: PropTypes.string,
};
DisplayPic.propTypes = {
  display_name: PropTypes.string,
  icon_img: PropTypes.string,
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
