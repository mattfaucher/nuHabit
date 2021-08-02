import React from 'react';
import {
	Card, Button, Row, Col, Container
} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
		this.completedTask.bind(this);
	}

	completedTask(e) {
		// TODO code for disabling the button
	}

	// Render a single Habit card, with Title, coloring/progress bar
	// and input fields
	render() {
		return (
			<Container style={{ width: '40%' }}>
				<Card border='dark' className='shadow-lg p-3 mb-5 bg-white rounded'>
					<Card.Body>
						<Row>
							<Col className="col-6 col-xs-2" align="left">
								<Card.Text>{this.title} started on {this.created}</Card.Text>
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