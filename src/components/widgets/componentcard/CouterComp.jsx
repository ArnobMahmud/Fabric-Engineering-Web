import React, { Component } from "react";
import { IconContext } from "react-icons";

class CouterComp extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <IconContext.Provider
            className="icons"
            value={{ size: "60", color: "rgb(87 62 94)" }}
          >
            {this.props.icons}
          </IconContext.Provider>
          <h1>{this.props.title}</h1>
          <p>{this.props.paragraph}</p>
        </div>
      </div>
    );
  }
}

export default CouterComp;
