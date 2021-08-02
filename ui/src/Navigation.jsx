import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

import LogoutButton from './LogoutButton.jsx';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.user.given_name + ' ' + props.user.family_name,
			email: props.user.email,
			picture: props.user.picture,
		};
	}

	render() {
		return (
			<Navbar
				sticky="top"
				expand="lg"
				bg="dark"
				variant="dark"
			>
				<Container>
					<Navbar.Brand href="/habits">nuHabit</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/completed">Completed Habits</Nav.Link>
						<Nav.Link href="/collection">Collection</Nav.Link>
					</Nav>
					<Nav className="ml-auto">
						<Nav.Item style={{color: 'white', marginRight: '10px'}}>
							<img src={this.state.picture} style={{width: '40px', borderRadius: '100px', marginRight: '5px'}}></img>
							{this.state.name}	
						</Nav.Item>
						<LogoutButton />
					</Nav>	
				</Container>
			</Navbar>
		);
	}
}

export default withAuth0(Navigation);
