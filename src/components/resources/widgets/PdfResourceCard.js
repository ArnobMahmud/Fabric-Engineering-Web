import React, { Component } from "react";
import { ImBook } from "react-icons/im";

export default class PdfResourceCard extends Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="content">
            <h1>{this.props.title}</h1>
            <h5>{this.props.subTitle}</h5>
            <p>{this.props.description}</p>
            <div className="btn">
              <a href={this.props.driveLink} target="_blank" rel="noreferrer">
                Visit Here <ImBook />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
