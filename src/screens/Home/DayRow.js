import React from 'react';
import { View, Text } from 'react-native';

const renderDays = () => {
  return ['1', '2', '3'];
};

const DayRow = () => {
  return (
    <View>
      <Text>Hello</Text>
      {console.log(renderDays())}
      {renderDays().map(i => (
        <Text>{i}</Text>
      ))}
    </View>
  );
};

export default DayRow;
