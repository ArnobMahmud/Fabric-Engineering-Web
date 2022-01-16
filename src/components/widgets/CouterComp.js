import React, { Component } from "react";
import { IconContext } from "react-icons";

class CouterComp extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <IconContext.Provider
            className="icons"
            value={{ size: "60", color: "#312135" }}
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
