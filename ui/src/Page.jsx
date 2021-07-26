import React from 'react';
import { Container } from 'react-bootstrap';

import Contents from './Contents.jsx';

export default class Page extends React.Component {
	static async fetchData(cookie) {
		//empty
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Container fluid>
					<Contents />
				</Container>
			</div>
		);
	}
}
