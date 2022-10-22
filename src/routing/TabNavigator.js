import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import images from '../res/images';
import ProfileScreen from '../screens/main/profile/ProfileScreen';
import HomeScreen from '../screens/main/home/HomeScreen';
import {Colors} from '../theme/Colors';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const TabNavigator = ({navigation, profile, isLoggedIn}) => {
  const Tab = createBottomTabNavigator();

  let userName = '';
  userName = isLoggedIn ? profile?.name : 'Guest';

  function getHeaderTitle(route) {
    // If the focused route is not found, we need to assume it's the initial screen
    // This can happen during if there hasn't been any navigation inside the screen
    // In our case, it's "Feed" as that's the first screen inside the navigator
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

    switch (routeName) {
      case 'Home':
        return 'Home';
      case 'Profile':
        return 'My profile';
    }
  }

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        inactiveTintColor: Colors.iconTint,
        activeTintColor: Colors.primaryColor,
      }}

      screenOptions={
        ({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = images.home;
            } else if (route.name === 'Profile') {
              iconName = images.profile;
            }
            return <Image style={[styles.image, {tintColor: focused ? Colors.primaryColor : Colors.iconTint}]}
                          source={iconName} />;
          },
        })
      }>
      <Tab.Screen
        options={({route}) => ({
          headerTitle: userName ? userName : getHeaderTitle(route),
        })}
        name='Home'
        navigation={navigation}
        component={HomeScreen} />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={({route}) => ({
          headerTitle: userName ? userName : getHeaderTitle(route),
        })}

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
    profile: state.profile.data,
  };
};

export default connect(mapStateToProps, {})(TabNavigator);
