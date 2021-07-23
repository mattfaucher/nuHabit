import React from 'react';

import HabitList from './HabitList.jsx';

export default class Page extends React.Component {
	static async fetchData(cookie) {
		//empty
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<HabitList />
		);
	}
}
