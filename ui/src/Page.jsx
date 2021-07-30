import React from 'react';
import { Container } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

import Navigation from './Navigation.jsx';
import Contents from './Contents.jsx';
import Footer from './Footer.jsx';

class Page extends React.Component {
	static async fetchData(cookie) {
		console.log("hi");
	}

	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<Navigation />
				<Container fluid style={{ marginTop: '25px' }}>
					<Contents />
				</Container>
				<Footer />
			</div>
		);
	}
}

export default withAuth0(Page);