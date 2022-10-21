import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';
import {connect} from 'react-redux';
import UserLogin from '../../../UserLogin';

const ProfileNavigator = ({error, data, isLoggedIn}) => {
  const Stack = createStackNavigator();
  let userName = '';
  if (isLoggedIn) {
    userName = data.name;
  } else {
    userName = 'Profile';
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: userName,
          headerRight: () => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <UserLogin />
            </View>
          ),
          headerTitleStyle: {alignSelf: 'center', fontSize: 19},
        }}
      />
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    data: state.aboutUser.data,
    error: state.aboutUser.error,
  };
};

export default connect(mapStateToProps, null)(ProfileNavigator);
