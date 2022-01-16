import React, { Component } from "react";

export class ScreenCardII extends Component {
  render() {
    return (
      <div>
        <div className="row justify-content-center align-items-center">
          <div className="card content col-lg-5 col-md-5 col-sm-12">
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
          </div>
          <div className="card col-lg-4 col-md-4 col-sm-12">
            <img className="effect2"
              src={this.props.imgPath}
              alt="dataImg"
              srcSet
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ScreenCardII;
