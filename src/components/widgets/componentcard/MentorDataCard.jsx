import React, { Component } from "react";

export class MentorDataCard extends Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="content">
            <h1>{this.props.name}</h1>
            <h4>{this.props.info}</h4>
            <p>Contact No : {this.props.contact}</p>
          </div>
        </div>
      </>
    );
  }
}

export default MentorDataCard;
