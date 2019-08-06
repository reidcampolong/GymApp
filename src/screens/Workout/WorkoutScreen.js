import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import { darkBackgroundColor } from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const WorkoutScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Workouts</Text>
    </View>
  );
};

export default WorkoutScreen;
