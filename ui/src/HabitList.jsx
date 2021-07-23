import React from 'react'
import {
	Row
} from 'react-bootstrap';

import Habit from './Habit.jsx';

export default class HabitList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Habit />	
		);
	}
}
