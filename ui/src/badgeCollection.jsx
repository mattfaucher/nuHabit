import React from "react";

export default class Collection extends React.Component {
	constructor(props) {
		super(props);
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

    getGrid(habbits) {
        for (let i = 0; i < habbits; i++) {
            <div class="col">Sample Badge</div>
        }
    }

	render() {
        const habbits = 5;
        const badges = 9;

        for (i = 0; i < cars.length; i++) {
                        
        }
        return (
            
            <Container fluid="md">
                <div class="row row-cols-9"></div>
                    getGrid(habbits);

            </Container>
            )
        }
}