import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default class Footer extends React.Component {
	render() {
		const navItemStyle = {
			color: "#adacaa",
			fontSize: "10px",
		}

    const bgStyle= {
      backgroundImage: 'linear-gradient(to left, rgb(59, 74, 93), black)',
    };

		return (
			<Container>
				<Navbar
					fixed="bottom"
					expand="lg"
					style={bgStyle}
					variant="dark"
				>
					<Container className="justify-content-left">
						<Navbar.Brand href="/habits">nuHabit</Navbar.Brand>
						<Nav>
							<Nav.Item style={navItemStyle}>All Rights Reserved {'\u00a9'} 2021</Nav.Item>
						</Nav>
					</Container>
				</Navbar>
			</Container>
		);
	}
}
