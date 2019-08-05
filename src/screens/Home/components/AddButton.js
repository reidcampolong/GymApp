import React from 'react';

import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  button: {
    borderWidth: 1,
    borderColor: '#c7e0f4',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
    marginBottom: 15
  },
  text: {
    color: 'white',
    fontSize: 40
  }
});

const AddButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

//  <Icon size={60} style={styles.button} name="plus" />

export default AddButton;
