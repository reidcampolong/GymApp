import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';

import { Provider } from 'react-redux';
import store from './src/store/store/';

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
