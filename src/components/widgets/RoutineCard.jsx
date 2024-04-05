import React, { Component } from "react";
import { FcDownRight } from "react-icons/fc";
import { IconContext } from "react-icons";

class RoutineCard extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <h1>{this.props.title}</h1>
          <div className="btn">
            <a
              href={this.props.driveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconContext.Provider value={{ size: "25" }}>
                {this.props.command} <FcDownRight />
              </IconContext.Provider>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default RoutineCard;
