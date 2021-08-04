//move html from habitdetails into here and have function to check count and render as many badges + cards as necessary
import React from 'react';


export default class BadgeCard extends React.Component {
    constructor(props) {
        super(props);
        this.day = props.day;
        this.earnedBadge = props.earnedBadge;
        this.increments = props.increments;

    }
     
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
                                <img className="img-fluid" src= {this.earnedBadge} alt="Earned Badge" />
                            </div>
                            <p className="col p-2 m-0"> {this.increments}: </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

