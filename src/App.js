import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

import {Provider, useSelector} from 'react-redux';
import store from './redux/store';

const MainApp = () => {
  const stateGolbal = useSelector(state => state);
  console.log(stateGolbal);
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
