import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab Navigator"
        component={TabNavigator}
        options={{
          headerTitle: 'Home',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
