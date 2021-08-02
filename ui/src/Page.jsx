import React from 'react';
import { Container } from 'react-bootstrap';
import { Auth0Provider } from '@auth0/auth0-react';

import Navigation from './Navigation.jsx';
import Contents from './Contents.jsx';
import Footer from './Footer.jsx';
import config from '../config.js';

export default class Page extends React.Component {
	static async fetchData(cookie) {
		console.log("PAGE FETCH DATA");
	}

	constructor() {
		super();
	}

	render() {
		return (
			<Auth0Provider
				domain={config.domain}
				clientId={config.clientId}
				redirectUri={config.redirectUri}
			>
				<Navigation />
				<Container fluid style={{ marginTop: '25px' }}>
					<Contents />
				</Container>
				<Footer />
			</Auth0Provider>
		);
	}
}
