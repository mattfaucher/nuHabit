import React from 'react';
import {
	Card, Button, Row, Col, Container,
	Form, Modal, InputGroup, FormControl,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default class AddHabit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			title: '',
			increment: true,
			isGood: true,
		};
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getInputTitle = this.getInputTitle.bind(this);
	}

	handleShow() {
		this.setState({
			showModal: true,
			title: this.state.title,
		});
	}

	handleClose() {
		this.setState({
			showModal: false,
			title: '',
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		this.setState({
			showModal: false,
			title: '',
		});
	}

	getInputTitle(e) {
		this.setState({
			title: e.target.value,
		});
	}

	render() {
		return (
			<Container fluid="md">
				<Card border='dark' className='shadow-lg p-3 mb-5 bg-white rounded'>
					<Card.Body>
						<Row>
							<Col className="col-10" align="left">
								<Form>
									<Form.Control type="text" placeholder="Add your new habit..." onChange={this.getInputTitle} />
								</Form>
							</Col>
							<Col className="col-2" align="right">
								<Button variant='success' onClick={this.handleShow}>
									<FontAwesomeIcon icon={faPlus} />
								</Button>
								<Modal show={this.state.showModal} onHide={this.handleClose}>
									<Modal.Header>Add Habit</Modal.Header>
									<Modal.Body className="ml-auto">
										<InputGroup>
											<InputGroup.Text id="title-input">Title</InputGroup.Text>
											<FormControl
												defaultValue={this.state.title}
												aria-label="Add your new habit"
												aria-describedby="title-input"
											/>
										</InputGroup>
										<InputGroup>
											<InputGroup.Text>Form</InputGroup.Text>
											<InputGroup.Radio
												aria-label="Form a habit"
												checked={true === this.state.isGood}
												onChange={e => { this.setState({ isGood: true }); }}
											/>
											<InputGroup.Text>Break</InputGroup.Text>
											<InputGroup.Radio
												aria-label="Break a habit"
												checked={false === this.state.isGood}
												onChange={e => { this.setState({ isGood: false }); }}
											/>
										</InputGroup>
										<InputGroup>
											<InputGroup.Text>Daily</InputGroup.Text>
											<InputGroup.Radio
												aria-label="Increment Selection"
												checked={true === this.state.increment}
												onChange={e => { this.setState({ increment: true }); }}
											/>
											<InputGroup.Text>Weekly</InputGroup.Text>
											<InputGroup.Radio
												aria-label="Increment Selection"
												checked={false === this.state.increment}
												onChange={e => { this.setState({ increment: false }); }}
											/>
										</InputGroup>
									</Modal.Body>
									<Modal.Footer>
										<Button variant='secondary' onClick={this.handleClose}>Close</Button>
										<Button variant='primary' onClick={this.handleSubmit}>Submit</Button>
									</Modal.Footer>
								</Modal>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		);
	}
}
