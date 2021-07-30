import React from 'react';

import AuthButton from './AuthButton.jsx';

export default class LandingPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Landing Page</h1>
				<AuthButton />
			</div>
		);
	}
}
