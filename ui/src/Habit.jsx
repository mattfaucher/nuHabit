import React from 'react';
import {
	Card, Button, Row, Col, Container
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default class Habit extends React.Component {
	constructor(props) {
		super(props);
		this.id = props.id;
		this.title = props.title;
		this.increments = props.increments;
		this.count = props.count;
		this.isGood = props.isGood;
		this.created = props.created;
		this.done = false;
		this.isDone = props.isDone;
		this.completedTask.bind(this);
	}

	completedTask(e) {
		// TODO code for disabling the button
	}
	// Render a single Habit card, with Title, coloring/progress bar
	// and input fields

	render() {
		const habitDetails = `/details/${this.id},${this.title},${this.count},${this.increments}`;
		return (
			<Container fluid="md">
				<Card border='dark' className='shadow-lg p-3 mb-5 bg-white rounded'>
					<Card.Body>
						<Row>
							<Col className="col-6 col-xs-2" align="left">
								<Link to={habitDetails}> {this.title}</Link>
							</Col>
							<Col className="col-6 col-xs-2" align="right">
								<Button
									onClick={this.completedTask}
									size="sm"
									variant="primary"
									// use variable here based on completion time interval
									disabled={this.done}
								// change disabled to true when done
								>
									Done
								</Button>
								{' '}
								<Button variant="secondary" size="sm">
									<FontAwesomeIcon icon={faBars} />
								</Button>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		);
	}
}