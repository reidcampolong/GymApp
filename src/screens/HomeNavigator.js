import { createStackNavigator } from 'react-navigation';
import HomeScreen from './Home/HomeScreen';

export default createStackNavigator({
  Home: { screen: HomeScreen }
});
