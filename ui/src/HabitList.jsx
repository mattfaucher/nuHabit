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
		let vars = { 'email': email };
		const query = `query ($email: String!) {
			userHabits(email: $email) {
				id title increments count isGood created
			}
		}`;
		const data = await graphQLFetch(query, vars);
		// if null, create new user
		if (!data.userHabits) {
			const newUser = {
				name: this.props.auth0.user.name,
				email: this.props.auth0.user.email,
			};

			vars = { 'user': newUser }
			const mutation = `mutation ($user: UserInput!) {
				insertUser(user: $user) {
					name email
				}
			}`;
			const data = await graphQLFetch(mutation, vars);
			return data;
		}
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
		if (data.userHabits) {
			this.setState({
				habitsList: data.userHabits,
			});
		}
	}

	async componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			const data = await this.fetchData(this.props.auth0.user.email);
			if (data.userHabits) {
				this.setState({
					habitsList: data.userHabits,
				});
			}
		}
	}

	render() {
		return (
			<div>
				<AddHabit />
				<Container fluid>
					{this.state.habitsList ?
						this.state.habitsList.map(habit => (
							<Habit
								key={habit.id}
								title={habit.title}
								created={JSON.stringify(habit.created)}
								count={habit.count}
								increments={habit.increments}
							/>)) :
						// render empty
						<div></div>}
				</Container>
			</div>
		);
	}
}

export default withAuth0(withAuthenticationRequired(HabitList, {
	onRedirecting: () => (<Alert variant='info'>Redirecting...</Alert>)
}));