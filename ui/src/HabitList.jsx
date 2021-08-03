import React from 'react'
import {
	Container,
} from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

import graphQLFetch from './graphQLFetch.js';
import Habit from './Habit.jsx';
import AddHabit from './AddHabit.jsx';

class HabitList extends React.Component {
	async fetchData(email) {
		const vars = { 'email': email };
		const query = `query ($email: String!) {
			userHabits(email: $email) {
				id title increments count isGood created
			}
		}`;

		const data = await graphQLFetch(query, vars);
		return data;
	}

	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			habitsList: null,
		};
	}

	async componentDidMount() {
		if (this.props.auth0 === undefined) {
			return;
		}
		const data = await this.fetchData(this.props.auth0.user.email);
		this.setState({
			habitsList: data,
		});
	}

	async componentDidUpdate() {
		if (this.state.data === undefined) {
			const data = await this.fetchData(this.props.auth0.user.email);
			this.setState({
				habitsList: data,
			});
		}
	}

	render() {
		let habitsList = [];
		if (this.state.habitsList !== undefined) {

			habitsList = this.state.habitsList;
			if (habitsList && habitsList.length > 0) {
			console.log("ENTER");
				habitsList.map(habit => <Habit
					key={habit.id}
					title={habit.title}
					created={JSON.stringify(habit.created)}
					count={habit.count}
					increments={habit.increments}
				/>);
			}
		}

		return (
			<div>
				<AddHabit />
				<Container fluid>
					{habitsList}
				</Container>
			</div>
		);
	}
}

export default withAuth0(HabitList);