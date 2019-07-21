import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Calendar } from 'react-native-calendars';
import Header from '../../components/Header';
import DayRow from './DayRow';

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  }
});

const HomeScreen = () => {
  return (
    <>
      <Header />
      <View>
        <Text>Hey</Text>
      </View>
      <DayRow />
    </>
  );
};

export default HomeScreen;
