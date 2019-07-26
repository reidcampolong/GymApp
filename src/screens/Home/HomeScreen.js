import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import DayRow from './DayRow';
import DisplayItem from './DisplayItem';
import { getCurrentDate } from '../../utils/Date';

const styles = StyleSheet.create({
  header: {
    height: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#2b88d8'
  }
});

const HomeScreen = ({ workouts }) => {
  const [selectedDate, setDate] = useState(getCurrentDate());
  console.log('Selected', selectedDate);
  console.log('Workouts', workouts);
  console.log(
    'Val',
    Object.values(workouts).find(workout => {
      console.log(workout.date, selectedDate, workout.date === selectedDate);
      return workout.date === selectedDate;
    })
  );
  return (
    <View style={styles.container}>
      <Header />
      <DayRow setDate={setDate} />
      <DisplayItem
        workoutData={Object.values(workouts).find(
          workout => workout.date === selectedDate
        )}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    workouts: state.workouts
  };
};

const HomeConnector = connect(mapStateToProps)(HomeScreen);

export default HomeConnector;
