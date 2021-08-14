import React from "react";
import { Container } from "react-bootstrap";
import { withAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import graphQLFetch from "./graphQLFetch.js";
import Habit from "./Habit.jsx";
import AddHabit from "./AddHabit.jsx";

class HabitList extends React.Component {
  constructor() {
    super();
    this.state = {
      habitList: [],
    };
  }

  // Grab the data for a user
  async fetchData(email) {
    // get the user if they exist
    const user = await this.userExists(email);
    // if null, create new user
    if (!user.user) {
      const newUser = {
        name: this.props.auth0.user.name,
        email: this.props.auth0.user.email,
      };
      const vars = { user: newUser };
      const mutation = `mutation ($user: UserInput!) {
				insertUser(user: $user) {
					name
					email
				}
			}`;
      const data = await graphQLFetch(mutation, vars);
      if (!data.habitList) return [];
      else return data.habitList;
    }
    // query the habitList
    const habits = await this.getHabits(email);
    return habits;
  }

  // Query to find if user exists
  async userExists(email) {
    const vars = { email: email };
    const query = `query ($email: String!) {
			user(email: $email) {
				name email
			}
		}`;
    const data = await graphQLFetch(query, vars);
    return data;
  }

  // Query to get the habits for a user
  async getHabits(email) {
    const vars = { email: email };
    const query = `query($email: String!){
			userHabits(email: $email) {
				_id
				title
				isGood
        count
				increments
				isDone
        created
        index
			}
		} `;
    const data = await graphQLFetch(query, vars);
    return data;
  }

  async componentDidMount() {
    const data = await this.fetchData(this.props.auth0.user.email);
    this.setState({
      habitList: data.userHabits,
    });
  }

  render() {
    return (
      <div>
        <AddHabit email={this.props.auth0.user.email} />
        <Container fluid>
          {this.state.habitList ? (
            this.state.habitList.map((habit) => (
              <Habit
                key={habit._id}
                _id={habit._id}
                title={habit.title}
                created={JSON.stringify(habit.created)}
                count={habit.count}
                increments={habit.increments}
                isGood={habit.isGood}
                email={this.props.auth0.user.email}
                index={habit.index}
              />
            ))
          ) : (
            <div></div>
          )}
        </Container>
      </div>
    );
  }
}

export default withAuth0(
  withAuthenticationRequired(
    HabitList //{ onRedirecting: () => <Alert variant="info">Loading...</Alert> }
  )
);
