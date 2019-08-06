import { createStackNavigator } from 'react-navigation';
import HomeScreen from './Home/HomeScreen';
import WorkoutScreen from './Workout/WorkoutScreen';

export default createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Workout: { screen: WorkoutScreen }
  },
  { headerMode: 'none' }
);
