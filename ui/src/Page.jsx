import React from 'react';
import { Container } from 'react-bootstrap';

import Navigation from './Navigation.jsx';
import Contents from './Contents.jsx';
import Footer from './Footer.jsx';

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
				<Navigation />
				<Container fluid>
					<Contents />
				</Container>
				<Footer />
			</div>
		);
	}
}
