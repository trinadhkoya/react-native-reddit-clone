import React from 'react';
import {Provider} from 'react-redux';
import store from 'redux/store';
import AppNavigator from './src/routing/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
