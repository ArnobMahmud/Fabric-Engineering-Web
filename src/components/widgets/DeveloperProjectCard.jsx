import React, { Component } from "react";

class DeveloperProjectCard extends Component {
  render() {
    return (
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <a href={this.onTap} className="card">
          <img src={this.props.img} alt="" />
          <h1>{this.props.title}</h1>
          <p>{this.props.subTitle}</p>
        </a>
      </div>
    );
  }
}

export default DeveloperProjectCard;
