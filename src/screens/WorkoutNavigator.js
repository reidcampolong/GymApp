import { createStackNavigator } from 'react-navigation';
import WorkoutScrene from './Workout/WorkoutScreen';

export default createStackNavigator(
  {
    Workouts: { screen: WorkoutScrene }
  },
  { headerMode: 'none' }
);
