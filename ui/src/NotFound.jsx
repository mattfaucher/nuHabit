import React from 'react'
import { Alert } from 'react-bootstrap';

export default class NotFound extends React.Component {
	constructor(props) {
		super(props);
	}	
	
	render() {
		return (
			<Alert variant='danger'>
				Page Not Found!
			</Alert>
		);
	}
}
