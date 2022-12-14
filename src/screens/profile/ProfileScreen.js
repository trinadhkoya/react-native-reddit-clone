import React from 'react';
import {StyleSheet, View} from 'react-native';
import DisplayPic from 'ui-kit/DisplayPic';
import HeadDesc from 'ui-kit/HeadDesc';
import {getProp, getReadableTime} from 'utils';

const ProfileScreen = ({profile}) => {
  const profileIcon = getProp(profile, 'subreddit.icon_img', '');
  const profileName = getProp(profile, 'name', '');
  return (
    <View style={{flexDirection: 'column'}}>
      <React.Fragment>
        <DisplayPic icon_img={profileIcon} display_name={profileName} />
        <View style={styles.karmaContainer}>
          <HeadDesc headerName={'Post'} headerValue={profile?.link_karma} />
          <HeadDesc
            headerName={'Comments'}
            headerValue={profile?.comment_karma}
          />
          <HeadDesc
            headerName={'Age'}
            headerValue={getReadableTime(profile?.created_utc)}
          />
        </View>
      </React.Fragment>
    </View>
  );
};

const styles = StyleSheet.create({
  karmaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
});

export default ProfileScreen;
