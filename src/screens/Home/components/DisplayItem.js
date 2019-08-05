import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#454547',
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
    margin: 10,
    padding: 10,
    borderRadius: 25
  },
  text: {
    color: 'white'
  }
});

// function getDisplayInformation(workout) {
//   console.log(workout.exercises[0]);
//   return workout.exercises.map(
//     exercise =>
//       'Name: ' +
//       exercise.exercise +
//       '\nSets: ' +
//       exercise.sets.map(
//         set =>
// '\nReps ' +
// set.reps +
// ' Rest Time ' +
// set.restTime +
// ' Weight: ' +
// set.weight
//       )
//   );
// }

const DisplayItem = ({ exercise }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{exercise.exercise}</Text>
      <Text style={styles.text}>
        {exercise.sets.map(
          set =>
            '\nReps ' +
            set.reps +
            ' Rest Time ' +
            set.restTime +
            ' Weight: ' +
            set.weight
        )}
      </Text>
    </View>
  );
};

export default DisplayItem;
