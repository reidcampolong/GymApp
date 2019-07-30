import React from 'react';

import { View, Text } from 'react-native';

function getDisplayInformation(exercises) {
  return exercises.map(
    exercise =>
      'Name: ' +
      exercise.exercise +
      '\nSets: ' +
      exercise.sets.map(
        set =>
          '\nReps ' +
          set.reps +
          ' Rest Time ' +
          set.restTime +
          ' Weight: ' +
          set.weight
      )
  );
}

const DisplayItem = ({ workoutData }) => {
  return (
    <View>
      <Text>Selected workout {workoutData.date}</Text>
      <Text>{getDisplayInformation(workoutData.exercises)}</Text>
    </View>
  );
};

export default DisplayItem;
