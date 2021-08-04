import { func } from 'prop-types';
import React from 'react';
import BadgeCard from './BadgeCard.jsx';
import {badgeArray} from './badges';
import {badges} from './badges';

import bronze from '../badges/bronze.jpg'

export default class HabitDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.match.params.title,
      count: this.props.match.params.count,
      increments: this.props.match.params.increments,
      collection: []
    };

	}

  
  

  /* correctBadges() {
    for (let i = 0; i < this.state.count; i++) {
      if(badges.day[i] <= this.state.count) {
        badgeArray.forEach(function(value, j) {
          if(j === i){
            this.state.collection.push(value);
          } 
        })
             
      }
  }
}
 */
	render() {
    console.log(this.state.collection);
  
    for (let i = 0; i < this.state.count; i++) {
      if(badges.day[i] <= this.state.count) {
        if(Number(Object.keys(badges.day)[i]) === badgeArray[i].key) {
          this.state.collection.push(bronze);
        } 
      }
  }
    
    console.log(this.state.collection[0]);

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
            <div>
              {this.state.collection.map( badge =>
                <BadgeCard 
                  key = {badges.day}
                  badge = {badge.earnedBadge}
                  increments = {this.state.increments}
                />
               )}
            </div>
            
            </div>
     
      );
  }
}
