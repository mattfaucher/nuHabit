import React from 'react';
import {
	Card, Button, Row, Col, Container, Form
} from 'react-bootstrap';

export default class AddHabit extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container style={{ width: '40%' }}>
				<Card border='dark' className='shadow-lg p-3 mb-5 bg-white rounded'>
					<Card.Body>
						<Row>
							<Col className="col-10" align="left">
								<Form>
									<Form.Control type="text" placeholder="Add your new habit..." />
								</Form>
							</Col>
							<Col className="col-2" align="right">
								<Button variant='success'>+</Button>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		);
	}
}
