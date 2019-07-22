import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import replacePathSepForGlob from 'jest-util/build/replacePathSepForGlob';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
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

const renderDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DayItem = ({ title }) => {
  const [didWorkout, setDidWorkout] = useState(true);
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: didWorkout ? '#32a866' : '#cc1616' }
      ]}
      onPress={() => setDidWorkout(!didWorkout)}
    >
      <Text style={styles.item}>{renderDays.indexOf(title) + 1}</Text>
      <Text style={styles.item}>{title}</Text>
      {/* <Icon name="rocket" size={30} color="#01a699" /> */}
    </TouchableOpacity>
  );
};

const DayRow = () => {
  return (
    <View style={styles.container}>
      {renderDays.map(i => (
        <DayItem key={i} title={i} />
      ))}
    </View>
  );
};

export default DayRow;
