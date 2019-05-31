/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';

import Butt from './components/Button';
//import AlertTest from './components/Alert';

const instructions = Platform.select({
 	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
 	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
	handler = () => {
		console.log('Pressed the button');
	}

	alertClicked = () => {
	Alert.alert(
		"Expiration in 1 month",
		'Replenish Soon Queen',
		[
			{text: 'Later', onPress: () => console.log("later pressed")},
			{
				text: "Ok",
				onPress: () => console.log('Ok Pressed'),
				style: "cancel"
				}
		],
			{cancelable : false}
	);
	};

	render() {
		return (
			<View style={styles.container}>
			<Text style={styles.welcome}>Welcome to React Native!</Text>
			<Text style={styles.instructions}>To get started, edit App.js</Text>
			<Text style={styles.instructions}>{instructions}</Text>
			<Butt onButt={this.handler} />
			<Button
			onPress = {this.alertClicked}
			style={styles.buttonStyle}
			title="Click Me"
			/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
  buttonStyle: {
    fontSize: 20, 
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  }
});
