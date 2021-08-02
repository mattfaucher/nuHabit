import React from 'react'
import {
	Container,
} from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

import graphQLFetch from './graphQLFetch.js';
import Habit from './Habit.jsx';
import AddHabit from './AddHabit.jsx';

class HabitList extends React.Component {
	static async fetchData(match = null) {
		// TODO remove hardcoding once login stuff is completed
		const vars = { _id: "6101848e618bac249a9b8780" };
		const query = `query ($_id: ID!) {
			userHabits(_id: $_id) {
				id title increments count isGood created
			}
		}`;

		const data = await graphQLFetch(query, vars);
		return data;
	}

	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		const { habitsList } = this.state;
		if (habitsList == null) this.loadData();
	}

	componentDidUpdate(prevProps) {
		const { habitsList } = prevProps;
	}

	async loadData() {
		const data = await HabitList.fetchData();
		if (data) {
			this.setState({ habitsList: data.userHabits });
		}
	}

	render() {
		// TODO use this data to get query id for fetch
		const user = this.props.auth0.user;

		let habits = [];
		if (this.state.habitsList) {
			habits = this.state.habitsList.map(
				habit => <Habit
					key={habit.id}
					title={habit.title}
					created={JSON.stringify(habit.created)}
					/>);
		}

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

export default withAuth0(HabitList);