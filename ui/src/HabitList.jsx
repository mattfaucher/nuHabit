import React from 'react'
import {
	Container,
} from 'react-bootstrap';

import graphQLFetch from './graphQLFetch.js';
import Habit from './Habit.jsx';
import AddHabit from './AddHabit.jsx';

export default class HabitList extends React.Component {
	static async fetchData(match) {
		const query = `query ($_id: ID!) {
			userHabits(_id: $_id) {
				title increments count isGood created
			}
		}`
		
		const data = await graphQLFetch(query);
		return data;
	}

	constructor(props) {
		super(props);
		this.state = {
			habits,
		};
	}

	componentDidMount() {
		const { habits } = this.state;
		if (habits = null) this.loadData();
	}
	
	async loadData() {
		const data = await HabitList.fetchData(match);
		if (data) {
			this.setState({
				habits: data.habitList,
			});
		}
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
