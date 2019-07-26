import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    borderWidth: 1,
    borderColor: '#c7e0f4',
    width: 50,
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  item: {
    fontSize: 12,
    color: 'white'
  }
});

const DayItem = ({ date, setDate }) => {
  const [didWorkout, setDidWorkout] = useState(true);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: didWorkout ? '#32a866' : '#cc1616' }
      ]}
      onPress={() => {
        setDidWorkout(!didWorkout);
        setDate(date);
      }}
    >
      <Text style={styles.item}>{date}</Text>
    </TouchableOpacity>
  );
};

const DayRow = ({ setDate, workouts }) => {
  console.log('Received workouts', workouts);
  return (
    <View style={styles.container}>
      {workouts.map(i => (
        <DayItem key={i.date} date={i.date} setDate={setDate} />
      ))}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    workouts: state.workouts
  };
};

const DayConnector = connect(mapStateToProps)(DayRow);

export default DayConnector;
