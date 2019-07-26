import React from 'react';

import { View, StyleSheet, Text } from 'react-native';

const DisplayItem = ({ workoutData }) => {
  console;
  return (
    <View>
      <Text>Selected workout {workoutData.date}</Text>
    </View>
  );
};

export default DisplayItem;
