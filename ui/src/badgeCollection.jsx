import React from "react";
import {
    Card,
    Row,
    Col,
    Container,
  } from "react-bootstrap";
import {badges, badgeArr} from "./badges";

export default class Collection extends React.Component {
	constructor(props) {
		super(props);
        this.count = props.count;
        this.increments = props.increments;
        collection = [];

      
	}

	render() {
        return (
            
            <Container fluid="md">
                <div class="row row-cols-9"></div>
                <div class="col">badge1</div>
                <div class="col">badge2</div>
                <div class="col">badge3</div>
                <div class="col">badge4</div>
                <div class="col">badge5</div>
                <div class="col">badge6</div>
                <div class="col">badge7</div>
                <div class="col">badge8</div>
                <div class="col">badge9</div>
            </Container>
            )
        }
}