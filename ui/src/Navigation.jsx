import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import LogoutButton from './LogoutButton.jsx';

function Navigation(isAuthenticated) {
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
					<LogoutButton />
				</Nav>
			</Container>
		</Navbar>
	);
}

export default Navigation;