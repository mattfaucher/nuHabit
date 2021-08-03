import React from 'react';
import {badgeArray} from './badges';
import {badges} from './badges';

export default class HabitDetails extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
      title: this.props.match.params.title,
      count: this.props.match.params.count,
      increments: this.props.match.params.increments
    };
	}

  correctBadges() {
    let correct = []; //the list of the correct badges to render
    
   
}


	render() {
    
      
    
      return (
        <div className=".container-fluid">
          
          <div className="d-grid gap-3">
            <div className="card text-center" style={{width: "100%"}}>
              <div className="card-body">
                    {this.state.title}
                <p className="card-text">Count: {this.state.count}</p>
              </div>
            </div>
        </div>
       
      </div>


        
        
            

        );
  }
}
