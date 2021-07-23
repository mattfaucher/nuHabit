import React from 'react'
import {
	Row
} from 'react-bootstrap';

import Habit from './Habit.jsx';

export default class HabitList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Row xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}>
				<Habit />
			</Row>
		);
	}
}
