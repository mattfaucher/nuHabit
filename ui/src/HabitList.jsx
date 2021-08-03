import React from 'react'
import {
	Container, Alert,
} from 'react-bootstrap';
import { withAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

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

	constructor() {
		super();
		this.state = {
			habitsList: [],
		};
	}

	async componentDidMount() {
		const data = await this.fetchData(this.props.auth0.user.email);
		const userData = await data;
		this.setState({
			habitsList: userData.userHabits,
		});
	}

	async componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			const data = await this.fetchData(this.props.auth0.user.email);
			const userData = await data;
			this.setState({
				habitsList: userData.userHabits,
			});
		}
	}

	render() {
		return (
			<div>
				<AddHabit />
				<Container fluid>
					{this.state.habitsList.map(habit => (
						<Habit
							key={habit.id}
							title={habit.title}
							created={JSON.stringify(habit.created)}
							count={habit.count}
							increments={habit.increments}
						/>))}
				</Container>
			</div>
		);
	}
}

export default withAuth0(withAuthenticationRequired(HabitList, {
	onRedirecting: () => (<Alert variant='info'>Redirecting...</Alert>)
}));