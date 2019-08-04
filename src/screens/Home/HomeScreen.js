import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import DatesRow from './DatesRow';
import DisplayItem from './DisplayItem';
import { getCurrentDate } from '../../utils/Date';

const styles = StyleSheet.create({
  header: {
    height: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#2F2F31'
  }
});

const HomeScreen = ({ workouts }) => {
  const [selectedDate, setDate] = useState(getCurrentDate());
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <DatesRow setDate={setDate} />
        {workouts.map(workout => (
          <DisplayItem key={workout.date} workoutData={workout} />
        ))}
      </ScrollView>
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
