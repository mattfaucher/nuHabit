import React from 'react';
import {
	Card, Container, Button, ButtonGroup, ToggleButton, Row, Col,
	Tooltip, OverlayTrigger, Popover,
} from 'react-bootstrap';

export default class Habit extends React.Component {
	constructor(props) {
		super(props);
		this.checked = false;
	}

	// Render a single Habit card, with Title, coloring/progress bar
	// and input fields
	render() {
		const cardStyle = {
			width: '40%',
		}
		return (
			<Card className='shadow-lg p-3 mb-5 bg-white rounded' style={cardStyle}>
				<Card.Body>
					<Row>
						<Card.Title>HABIT TITLE</Card.Title>
						<ButtonGroup>
							<ToggleButton type="checkbox">Complete</ToggleButton>
							<Button id="edit">Edit</Button>
						</ButtonGroup>
					</Row>
				</Card.Body>
			</Card>
		);
	}
}