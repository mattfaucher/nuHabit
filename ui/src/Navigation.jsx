import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default class Navigation extends React.Component {
	constructor(props) {
		super(props);
		const toggleNav = () => {
			this.setState({ toggle: !this.state.toggle} );
			console.log(this.state.toggle);
			return this.state.toggle;
		}

		this.state = {
			toggle: false,
			toggleNav: toggleNav,
		}
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
							<Nav.Link href="/signin">Sign in</Nav.Link>
							<Nav.Link href="/about">About</Nav.Link>
						</Nav>
				</Container>
			</Navbar>
		);
	}
}
