import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import DashBoardTabs from './TabNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        screenOptions={{
          headerShown: false,
        }}
        name="Home"
        component={DashBoardTabs}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
