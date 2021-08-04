import React from 'react';
import Badges from './badges.js';
import img from '../badges/gold.jpg';

const badgeArray = Badges.badgeArray;
const badges = Badges.badges;

export default class HabitDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.match.params.title,
      count: this.props.match.params.count,
      increments: this.props.match.params.increments
    };
  }

  render() {
    const cardStyle = {
      display: "flex",
      flex: "1 1 auto"
    }

    return (
      <div className=".container-fluid">
        <div className="d-grid gap-3">
          <div className="card text-center" style={{ width: "100%" }}>
            <div className="card-body">
              {this.state.title}
              <p className="card-text">Count: {this.state.count}</p>
            </div>
          </div>

          <div className="col d-flex align-items-center">
            <div className="card w-50" style={cardStyle}>
              <div className="card-img-top d-flex align-items-center bg-light">
                <div>
                  <img className="img-fluid" src={img.toString() + '/100x100'} alt="Card image" />
                </div>
                <p className="col p-2 me-auto">{this.state.increments}: </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}