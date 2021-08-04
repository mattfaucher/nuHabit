import React from 'react'
import {
	Container, Alert,
} from 'react-bootstrap';
import graphQLFetch from './graphQLFetch.js';
import Habit from './Habit.jsx';

class HabitList extends React.Component {
	async fetchData(email) {
		const vars = { 'email': email };
		const query = `query ($email: String!) {
			userHabits(email: $email) {
				id title increments count isGood created isDone
			}
		}`;

		const data = await graphQLFetch(query, vars);
		return data;
	}

	constructor() {
		super();
		this.state = {
			completed: [],
		};
	}

    async componentDidMount() {
		const data = await this.fetchData(this.props.auth0.user.email);
		const userData = await data;
		this.setState({
			completed: userData.completedHabits,
		});
	}

	async componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			const data = await this.fetchData(this.props.auth0.user.email);
			const userData = await data;
			this.setState({
				completed: userData.completedHabits,
			});
		}
	}

    render() {
        return (
            <div>
                <Container fluid>
                   
                </Container>
            </div>
        );
    }
}