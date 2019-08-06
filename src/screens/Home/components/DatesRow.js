import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    borderWidth: 1,
    borderColor: '#c7e0f4',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  item: {
    fontSize: 12,
    color: 'white'
  }
});

const DayItem = ({ date, isSelected, setDate }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: isSelected ? '#32a866' : '#2F2F31' }
      ]}
      onPress={() => setDate(date)}
    >
      <Text style={styles.item}>{date}</Text>
    </TouchableOpacity>
  );
};

const DayRow = ({ selectedDate, setDate, workouts }) => {
  return (
    <View style={styles.container}>
      {workouts.map(workout => (
        <DayItem
          key={workout.date}
          date={workout.date}
          isSelected={selectedDate === workout.date}
          setDate={setDate}
        />
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
