import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import HomeHeaderSearch from './header/HomeHeaderSearch';
import colors from 'res/colors';

const HomeNavigator = ({navigation}) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => /*<HomeHeaderLeft />*/ <View />,
          headerRight: () => /*<HomeHeaderRight />*/ <View />,
          headerTitle: () => <HomeHeaderSearch />,
          headerStyle: {shadowColor: colors.stackHeader.shadowColor},
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
