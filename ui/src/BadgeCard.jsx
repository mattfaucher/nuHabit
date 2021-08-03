//move html from habitdetails into here and have function to check count and render as many badges + cards as necessary
import React from 'react';
import {badgeArray} from './badges';
import {badges} from './badges';


export default class BadgeCard extends React.Component {
    constructor(props) {
        super(props);

    }
/*
    correctBadges() {
        correct = [];
        for (let i = 0; i < this.count; i++) {
            if(badges.day)
            if(badges.day[i] === badgeArray[i]) {
                correct.push(badgeArray[i]);
            }
        }

        console.log(correct);
    }
*/
    render(){
        const cardStyle = {
            display: "flex",
            flex: "1 1 auto"
          }

        return (
            <div className=".container-fluid">

                <div className="col d-flex align-items-center">
                    <div className="card w-50" style={cardStyle}>
                        <div className="card-img-top d-flex align-items-center bg-light">
                            <div>
                                <img className="img-fluid" src="badgeArray[0]" alt="Card image cap" />
                            </div>
                            <p className="col p-2 m-0"> {this.state.increments}: </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

