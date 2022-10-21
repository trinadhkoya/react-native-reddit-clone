import React from 'react';
import {Image, View} from 'react-native';

const ProfilePicture = ({data}) => {
  var url = '';
  if (data.subreddit !== undefined) {
    url = data.subreddit.icon_img;
    return (
      <View style={{justifyContent: 'center', alignSelf: 'center'}}>
        <Image
          source={{uri: url}}
          style={{width: 80, height: 80, borderRadius: 50}}
        />
      </View>
    );
  } else {
    return <View />;
  }
};

export default ProfilePicture;
