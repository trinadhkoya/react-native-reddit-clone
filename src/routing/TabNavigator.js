import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import images from '../res/images';
import ProfileScreen from '../containers/main/profile/ProfileScreen';
import HomeScreen from '../containers/main/home/HomeScreen';

const TabNavigator = ({navigation, data, isLoggedIn}) => {
  const Tab = createBottomTabNavigator();

  let userName = '';
  userName = isLoggedIn ? data?.name : 'Guest';

  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true,
        style: styles.tabBar,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? images.home_selected : images.home;
          } else if (route.name === 'Profile') {
            iconName = focused ? images.profileSelected : images.profile;
          }
          return <Image style={styles.image} source={iconName} />;
        },
      })}>
      <Tab.Screen name="Home" navigation={navigation} component={HomeScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: userName}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  image: {width: 25, height: 25, resizeMode: 'contain'},
  tabBar: {backgroundColor: '#fff', flexWrap: 'wrap'},
});

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
};

export default connect(mapStateToProps, {})(TabNavigator);
