import React from "react";
import { Container, Navbar, Card, Row, Col, Image } from "react-bootstrap";

import AuthButton from "./AuthButton.jsx";
import Footer from "./Footer.jsx";
import logo from '../listing.png';

export default class LandingPageM extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const pageBg = {
			backgroundImage: 'linear-gradient(white, rgb(220, 220, 255))',
		};

		const titleStyle = {
			fontSize: '3vh',
			marginTop: '1vh',
			marginBottom: '1vh',
			background: 'linear-gradient(rgb(59, 74, 93), grey)',
			WebkitBackgroundClip: 'text',
			WebkitTextFillColor: 'transparent',
			fontWeight: '800',
		};

		const colSpacing = {
			margin: '10px auto 10px auto',
		};

		const headerStyle = {
			fontSize: '3vh',
			textAlign: 'left',
			marginTop: '1vh',
			marginBottom: '1vh',
			background: 'linear-gradient(rgb(59, 74, 93), grey)',
			WebkitBackgroundClip: 'text',
			WebkitTextFillColor: 'transparent',
			fontWeight: '800',
		};

		const headerImgStyle = {
			maxHeight: '8vh',
			maxWidth: '8vw',
			height: 'auto',
			width: 'auto',
			margin: '10px 5px 0px 5px',
		};

		const startedStyle = {
			fontSize: '3vh',
			textAlign: 'center',
			marginTop: '1vh',
			marginBottom: '1vh',
			background: 'linear-gradient(rgb(59, 74, 93), grey)',
			WebkitBackgroundClip: 'text',
			WebkitTextFillColor: 'transparent',
			fontWeight: '800',
		};

		const pStyle = {
			color: 'rgb(59, 74, 93)',
			fontSize: '2vh',
			fontWeight: '400',
		};

		const cardStyle = {
			boxShadow: ' 5px 5px 5px 2px #888888',
		};

		const cardHeaderStyle = {
			textAlign: 'center',
			fontWeight: '500',
			fontSize: '2vh',
			textShadow: '5px 5px 5px 5px #888888',
			color: 'rgb(59,74,93)',
		};

		const cardImgStyle = {
			display: 'block',
			maxWidth: '11vw',
			maxHeight: '11vh',
			width: 'auto',
			height: 'auto',
			marginLeft: 'auto',
			marginRight: 'auto',
		};

		return (
			<div>
				<div style={pageBg}>
					<Container fluid="md" style={{ paddingBottom: '140px' }}>
						<Container fluid="md">
							<Row className="row row-cols-md-3">
								<Col>
									<h2 style={titleStyle} align='left'>nuHabit</h2>
								</Col>
								<Col align='center'>
									<Image src={logo} style={headerImgStyle}></Image>
								</Col>
								<Col>
									<h2 style={titleStyle} align='left'>Habit tracking made simple</h2>
								</Col>
							</Row>
						</Container>
						<hr />
						<h2 style={headerStyle}>Our Mission</h2>
						<p style={pStyle}>
							nuHabit was designed with the idea that having the ability to
							track progress for gaining a new habit or breaking a bad one encourages active
							participation in the process, increasing the chance of success.
						</p>
						<h2 style={startedStyle}>Get Started</h2>
						<Container fluid="md">
							<Row>
								<Col align='center'>
									<AuthButton />
								</Col>
							</Row>
						</Container>
						<h2 style={headerStyle}>How it works</h2>
						<hr />
						<Container fluid="md">
							<Row style={{ marginTop: '10px' }} xs={1} md={2} className='g-4'>
								<Col style={colSpacing}>
									<Card style={cardStyle} border='dark' className='card h-100'>
										<Card.Header style={cardHeaderStyle}>Add Habits</Card.Header>
										<Card.Body>
											<Card.Text>
												Name it, set whether you want to form or break it, and choose whether it's a daily or weekly
											</Card.Text>
											<Card.Img
												style={cardImgStyle}
												src="https://img.icons8.com/color/452/bouncing-ball.png"
												alt="Bouncing Ball"
											>
											</Card.Img>
										</Card.Body>
									</Card>
								</Col>
								<Col style={colSpacing}>
									<Card style={cardStyle} border='dark' className='card h-100'>
										<Card.Header style={cardHeaderStyle}>Earn Badges</Card.Header>
										<Card.Body>
											<Card.Text>
												Consistently tally your habits to earn more badges
											</Card.Text>
											<Card.Img
												style={cardImgStyle}
												src="https://www.freeiconspng.com/thumbs/badge-icon-png/badge-icon-png-22.png"
												alt="Gold Medal"
											>
											</Card.Img>
										</Card.Body>
									</Card>
								</Col>
								<Col style={colSpacing}>
									<Card style={cardStyle} border='dark' className='card h-100'>
										<Card.Header style={cardHeaderStyle}>Look at what you've accomplished!</Card.Header>
										<Card.Body>
											<Card.Text>
												View all your newly formed or broken habits so you can see just how far you've come
											</Card.Text>
											<Card.Img
												style={cardImgStyle}
												src="https://static.thenounproject.com/png/492226-200.png"
												alt="Celebration man"
											>
											</Card.Img>
										</Card.Body>
									</Card>
								</Col>
								<Col style={colSpacing}>
									<Card style={cardStyle} border='dark' className='card h-100'>
										<Card.Header style={cardHeaderStyle}>Show off your badges!</Card.Header>
										<Card.Body>
											<Card.Text>
												View the amount of times you have earned a badge and pat yourself on the back!
											</Card.Text>
											<Card.Img
												style={cardImgStyle}
												src="https://image.flaticon.com/icons/png/128/3483/3483089.png"
												alt="Smiling Face"
											>
											</Card.Img>
										</Card.Body>
									</Card>
								</Col>
							</Row>
						</Container>
					</Container>
					<Footer />
				</div>
			</div>
		);
	}
}
