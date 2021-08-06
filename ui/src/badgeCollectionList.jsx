import React from "react";
import Collection from "./badgeCollection.jsx";
import {
    Container,
  } from "react-bootstrap";
export default class BadgeCollectionList extends React.Component {
    async fetchData(email) {
        const vars = { email: email };
        const query = `query ($email: String!) {
                    userHabits(email: $email) {
                        _id
                        title
                        isGood
                        count
                        increments
                        isDone
                        created
                    }
                } `;
    
        const data = await graphQLFetch(query, vars);
        return data;
      }

    constructor() {
        this.state = {
            habitList: [],
        }

    }

    async componentDidMount() {
        const data = await this.fetchData(this.props.auth0.user.email);
        const userData = await data;
        this.setState({
         habitList: userData.habitList,
        });
      }

    render(){

        return(
            <div>
            <Container fluid>
          {this.state.habitList.map((habit) => (
            <Collection
              key={habit._id}
              count={habit.count}
              increments={habit.increments}
            />))}
        </Container>
      </div>
        );

}
}

/**
 * Pull from the database
 * querying the database for the habbits
 * Go into a habbit is its count
 * compare the count to increment in badges
 * If the count is 6, only one badge should appear
 * Increments Enum daily/weekly
 * If increments equal daily do daily
 * If increments equal weekly do weekly
 * Matching indices: day1 is key 0->day1 and then use
 * key to compare into the index of the badge array
 * For i = 0, if i < this.count, i++
 * Then, compare the value to the count
 * If the value is greater than count, stop
 * Only one badge will be logged into the array
 **/