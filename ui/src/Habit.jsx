import React from 'react';
import {
	Card, Button, ToggleButton, Row, Col, Container
} from 'react-bootstrap';

export default class Habit extends React.Component {
	constructor(props) {
		super(props);
		this.checked = false;
	}

	// Render a single Habit card, with Title, coloring/progress bar
	// and input fields
	render() {
		return (
			<Container fluid="sm">
				<Card border='dark' className='shadow-lg p-3 mb-5 bg-white rounded'>
					<Card.Body>
						<Row>
							<Col className="col-8" align="left">
								<Card.Text>HABIT TITLE</Card.Text>
							</Col>
							<Col className="col-2 col-xs-1" align="center">
								<ToggleButton
									id="toggle-check"
									type="checkbox"
									variant="primary"
									checked={false}
									value="1"
									onChange={(e) => setChecked(e.currentTarget.checked)}
								>
									Done
								</ToggleButton>
							</Col>
							<Col className="col-2 col-xs-1" align="center">
								<Button className="btn btn-secondary btn-lg">Edit</Button>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		);
	}
}