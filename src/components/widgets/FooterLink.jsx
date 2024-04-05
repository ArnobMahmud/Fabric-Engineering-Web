import React, { Component } from "react";

export class FooterLink extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <h4>{this.props.title}</h4>
          </li>
          <li>
            <h5>{this.props.subTitle}</h5>
          </li>
          <li className="nav-item">{this.props.link1}</li>
          <li className="nav-item">{this.props.link2}</li>
          <li className="nav-item">{this.props.link3}</li>
          <li className="nav-item">{this.props.link4}</li>
          <li className="nav-item">{this.props.link5}</li>
        </ul>
      </>
    );
  }
}

export default FooterLink;
