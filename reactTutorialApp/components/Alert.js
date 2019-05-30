import React from 'react';
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native';


const AlertTest = () => {
  const showAlert = () => {
    Alert.alert(
      'Replenish Soon Queen'
    )
  }
  return (
    <TouchableOpacity onPress = {showAlert} style = {styles.button}>
      <Text> Click Me </Text>
    </TouchableOpacity>
  );
};

export default AlertTest;


const styles = StyleSheet.create ({
  button: {
    backgroundColor: '#4ba37b',
    width: 100,
    borderRadius: 50,
    alignItems: 'center'

  }
})

/*
Alert.alert(
  'Alert Title',
  'My Alert Msg',
  [
    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  {cancelable: false},
);*/