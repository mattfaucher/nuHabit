import React from 'react'
import {
	Container,
} from 'react-bootstrap';

import Habit from './Habit.jsx';
import AddHabit from './AddHabit.jsx';

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
			<div>
				<AddHabit />
				<Container fluid>
					{habits}
				</Container>
			</div>
		);
	}
}
