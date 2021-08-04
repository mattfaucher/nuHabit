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
			isDaily: true,
			isGood: true,
		};
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getInputTitle = this.getInputTitle.bind(this);
		this.handleTextSubmit = this.handleTextSubmit.bind(this);
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

	handleTextSubmit(e) {
		e.preventDefault();
		this.setState({
			showModal: true,
		});
	}

	getInputTitle(e) {
		if (e.target.value == '') return;
		this.setState({
			title: e.target.value,
		});
	}

	render() {
		const inputCenter = {
			justifyContent: 'center',
			marginTop: '20px',
		};

		return (
			<Container fluid="md">
				<Card border='dark' className='shadow-lg p-3 mb-5 bg-white rounded'>
					<Card.Body>
						<Row>
							<Col className="col-10" align="left">
								<form onSubmit={this.handleTextSubmit}
								>
									<Form.Control
										type="text"
										placeholder="Add your new habit..."
										onChange={this.getInputTitle}
									/>
								</form>
							</Col>
							<Col className="col-2" align="right">
								<Button variant='success' onClick={this.handleShow}>
									<FontAwesomeIcon icon={faPlus} />
								</Button>
								<Modal show={this.state.showModal} onHide={this.handleClose}>
									<Modal.Header>
										<Modal.Title>Create a new habit</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<InputGroup style={inputCenter}>
											<InputGroup.Text id="title-input">Title</InputGroup.Text>
											<FormControl
												defaultValue={this.state.title}
												aria-label="Add your new habit"
												aria-describedby="title-input"
											/>
										</InputGroup>
										<InputGroup style={inputCenter}>
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
										<InputGroup style={inputCenter}>
											<InputGroup.Text>Daily</InputGroup.Text>
											<InputGroup.Radio
												aria-label="Increment Selection"
												checked={true === this.state.isDaily}
												onChange={e => { this.setState({ isDaily: true }); }}
											/>
											<InputGroup.Text>Weekly</InputGroup.Text>
											<InputGroup.Radio
												aria-label="Increment Selection"
												checked={false === this.state.isDaily}
												onChange={e => { this.setState({ isDaily: false }); }}
											/>
										</InputGroup>
									</Modal.Body>
									<Modal.Footer style={{ justifyContent: 'center' }}>
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
