import React from 'react';
import {
	Card, Button, Row, Col, Container
} from 'react-bootstrap';


export default class Habit extends React.Component {
	constructor(props) {
		super(props);
		this.title = props.title;
		this.done = false;
		this.completedTask.bind(this);
	}

	completedTask(e) {
		if (!this.done) this.done = true;
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
								<Card.Text>{this.title}</Card.Text>
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
								</Button>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		);
	}
}