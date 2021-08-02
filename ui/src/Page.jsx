import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import { Auth0Provider, withAuth0 } from '@auth0/auth0-react';

import LandingPage from './LandingPage.jsx';
import Navigation from './Navigation.jsx';
import Contents from './Contents.jsx';
import Footer from './Footer.jsx';
import config from '../config.js';

class Page extends React.Component {
	static async fetchData(cookie) {
		console.log("PAGE FETCH DATA");
	}

	constructor() {
		super();
	}

	render() {
		const { isAuthenticated, isLoading, error } = this.props.auth0;
		if (isLoading) {
			return (
				<Alert variant='info'>Loading!</Alert>
			);
		}
		if (error) {
			return (
				<Alert variant='danger'>Oops! Something went wrong!</Alert>
			);
		}
		return (
			<Auth0Provider
				domain={config.domain}
				clientId={config.clientId}
				redirectUri={config.redirectUri}
			>
				{isAuthenticated ?
					<div>
						<Navigation />
						<Container fluid style={{ marginTop: '25px' }}>
							<Contents />
						</Container>
						<Footer />
					</div>
					: <LandingPage />
				}
			</Auth0Provider>
		);
	}
}

export default withAuth0(Page);