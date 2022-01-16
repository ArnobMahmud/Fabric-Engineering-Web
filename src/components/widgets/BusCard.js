import React, { Component } from "react";

class BusCard extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <h2>{this.props.routeTitle}</h2>
          <img src={this.props.routeImg} alt="" srcSet />
        </div>
      </div>
    );
  }
}

export default BusCard;
