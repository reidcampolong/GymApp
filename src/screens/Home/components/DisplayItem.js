import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { lightBackgroundColor } from '../../../theme/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightBackgroundColor,
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

const DisplayItem = ({ navigation, exercise }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Workout')}>
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
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(DisplayItem);
