import React from 'react';
import { Container } from 'react-bootstrap';

import Navigation from './Navigation.jsx';
import Contents from './Contents.jsx';
import Footer from './Footer.jsx';
import LandingPage from './LandingPage.jsx';

export default class Page extends React.Component {
	static async fetchData(cookie) {
		//empty
	}

	constructor(props) {
		super(props);
	}

	// Determine what to render based on if they're logged in
	render() {
		const loggedIn = false;

		const normal = (
			<div>
				<Navigation />
				<Container fluid style={{ marginTop: '25px' }}>
					<Contents />
				</Container>
				<Footer />
			</div>
		);

		const invalid = (<LandingPage />);

		return (loggedIn ? normal : invalid);
	}
}
