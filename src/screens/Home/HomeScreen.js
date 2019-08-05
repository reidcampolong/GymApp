import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import DisplayContainer from './DisplayContainer';
import DatesRow from './components/DatesRow';
import AddButton from './components/AddButton';
import { getCurrentDate } from '../../utils/Date';

const styles = StyleSheet.create({
  header: {
    height: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#2F2F31'
  },
  display: {
    backgroundColor: 'red'
  },
  dates: {
    paddingBottom: 10,
    marginBottom: 10
  }
});

const HomeScreen = ({ workouts }) => {
  const [selectedDate, setDate] = useState(getCurrentDate());

  return (
    <View style={styles.container}>
      <Header />
      <DatesRow
        style={styles.dates}
        selectedDate={selectedDate}
        setDate={setDate}
      />
      <DisplayContainer
        style={styles.display}
        selectedDate={selectedDate}
        workouts={workouts}
      />
      <AddButton />
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
