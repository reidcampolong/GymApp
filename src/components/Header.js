import React from 'react';
import t from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { headerPrimary } from '../theme/theme';

const HeaderStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: headerPrimary,
    borderBottomColor: '#005a9e',
    borderBottomWidth: 2
  },
  backButton: {
    backgroundColor: headerPrimary,
    height: '100%'
  },
  backIconStyle: {
    marginTop: 10,
    marginLeft: 10,
    paddingBottom: 5
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
});

const Header = ({ title, backButton }) => {
  return (
    <View style={HeaderStyle.container}>
      <View style={HeaderStyle.header}>
        <Text style={HeaderStyle.text}>{title}</Text>
      </View>
      {backButton && (
        <Icon.Button
          iconStyle={HeaderStyle.backIconStyle}
          style={HeaderStyle.backButton}
          borderRadius={0}
          name="arrow-left"
        />
      )}
    </View>
  );
};

Header.propTypes = {
  title: t.string,
  backButton: t.bool
};

Header.defaultProps = {
  title: 'GymApp',
  backButton: true
};

export default Header;
