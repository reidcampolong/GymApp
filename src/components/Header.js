import React from 'react';
import t from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

const HeaderStyle = StyleSheet.create({
  header: {
    backgroundColor: '#0078D4',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#005a9e',
    borderBottomWidth: 2
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
});

const Header = ({ title }) => {
  return (
    <View style={HeaderStyle.header}>
      <Text style={HeaderStyle.text}>{title}</Text>
    </View>
  );
};

Header.propTypes = {
  title: t.string
};

Header.defaultProps = {
  title: 'GymApp'
};

export default Header;
