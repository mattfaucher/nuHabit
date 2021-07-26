import React from 'react'
import {
	Container,
} from 'react-bootstrap';

import Habit from './Habit.jsx';

export default class HabitList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const habits = [
			<Habit title="Eat Healthy" />,
			<Habit title="Workout" />,
			<Habit title="Go to bed early" />
		];

		return (
			<Container fluid>
				{habits}
			</Container>

		);
	}
}
