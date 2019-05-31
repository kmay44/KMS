import React from 'react';
import { Button } from 'react-native';

const Butt = props => {
	return (
		<Button title="Ok Got It!" onPress={props.onButt} />
	);
};

export default Butt;