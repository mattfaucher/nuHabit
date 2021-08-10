import React from 'react';
import {
	Card, Button, Row, Col, Container,
	Form, Modal, InputGroup, FormControl,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import graphQLFetch from './graphQLFetch.js';

export default class AddHabit extends React.Component {
	constructor(props) {
		super(props);
		this.email = props.email;
		this.state = {
			showModal: false,
			title: '',
			isDaily: true,
			isGood: true,
		};
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleTextSubmit = this.handleTextSubmit.bind(this);
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
	
	handleTextSubmit(e) {
		e.preventDefault();
		this.setState({
			showModal: true,
		});
	}

	async handleSubmit(e) {
		//e.preventDefault();
		// don't allow bad input
		if (this.state.title.length < 3) {
			this.setState({
				showModal: false,
			});
			return;
		}
		// submit mutation to backend
		const mutation = `mutation ($email: String!, $habit: HabitInputs!) {
			insertHabit(email: $email, habit: $habit) {
				title
			}
		}`;
		const vars = {
			email: this.email,
			habit: {
				title: this.state.title,
				isGood: this.state.isGood,
				increments: this.state.isDaily ? "Daily" : "Weekly"
			}
		};
		const data = await graphQLFetch(mutation, vars);
		if (!data) throw Error();
		this.setState({
			showModal: false,
			title: '',
		});
		// force reload to refresh new habits
		window.location.reload();
	}

	getInputTitle(e) {
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
								<form
									onSubmit={this.handleTextSubmit}
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
									<FontAwesomeIcon size={'2x'} icon={faPlus} />
								</Button>
								<Modal
									show={this.state.showModal}
									onHide={this.handleClose}
								>
								<Modal.Header className='mx-auto'>
									<Modal.Title>Create a new habit</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<InputGroup style={inputCenter}>
										<InputGroup.Text id="title-input">Title</InputGroup.Text>
										<FormControl
											defaultValue={this.state.title}
											aria-label="Add your new habit"
											aria-describedby="title-input"
											onChange={this.getInputTitle}
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
								<Modal.Footer className='mx-auto'>
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
