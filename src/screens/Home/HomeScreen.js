import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Header from '../../components/Header';
import DayRow from './DayRow';

const styles = StyleSheet.create({
  header: {
    height: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#2b88d8'
  }
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <DayRow />
    </View>
  );
};

export default HomeScreen;
