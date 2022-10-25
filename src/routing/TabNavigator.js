import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Colors} from 'theme/Colors';
import images from 'assets/images';
import ProfileContainer from 'screens/profile/ProfileContainer';
import HomeScreenContainer from 'screens/home/HomeScreenContainer';

const TabNavigator = ({navigation, profile, isLoggedIn}) => {
  const Tab = createBottomTabNavigator();

  let userName = '';
  userName = isLoggedIn ? profile?.name : 'Guest';

  function getHeaderTitle(route) {
      // If the focused route is not found, we need to assume it's the initial screen
      // This can happen during if there hasn't been any navigation inside the screen
      // In our case, it's "Feed" as that's the first screen inside the navigator
      const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
      if (routeName === 'Home') {
          return 'Home';
      } else if (routeName === 'Profile') {
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
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = images.home;
          } else if (route.name === 'Profile') {
            iconName = images.profile;
          }
          return (
            <Image
              style={[
                styles.image,
                {tintColor: focused ? Colors.primaryColor : Colors.iconTint},
              ]}
              source={iconName}
            />
          );
        },
      })}>
      <Tab.Screen
        options={({route}) => ({
          headerTitle: userName ? userName : getHeaderTitle(route),
        })}
        name="Home"
        navigation={navigation}
        component={HomeScreenContainer}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileContainer}
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

const mapStateToProps = ({login, profile}) => {
  return {
    isLoggedIn: login.isLoggedIn,
    profile: profile.data,
  };
};

export default connect(mapStateToProps, {})(TabNavigator);
