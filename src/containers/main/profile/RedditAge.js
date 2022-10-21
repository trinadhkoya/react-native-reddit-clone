import React from 'react';
import {Text, View} from 'react-native';
import {getReadableTime} from '../../../utils';

const RedditAge = ({data}) => {
  return (
    <View style={{flexDirection: 'column', alignItems: 'center'}}>
      <Text style={{fontSize: 15, fontWeight: '500'}}>Reddit Age</Text>
      <Text style={{fontSize: 16, fontWeight: '500'}}>
        {getReadableTime(data.created_utc)}
      </Text>
    </View>
  );
};

export default RedditAge;
