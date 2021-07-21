import React from 'react';

export default class Page extends React.Component {
	static async fetchData(cookie) {
		console.log("HELLO");
	}

	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				Hello, World!
			</div>
		);
	}
}
