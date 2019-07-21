import { createBottomTabNavigator } from 'react-navigation';

import HomeNavigator from './src/screens/HomeNavigator';
import SettingsNavigator from './src/screens/SettingsNavigator';

const AppNavigator = createBottomTabNavigator({
  Home: { screen: HomeNavigator },
  Settings: { screen: SettingsNavigator }
});

export default AppNavigator;
