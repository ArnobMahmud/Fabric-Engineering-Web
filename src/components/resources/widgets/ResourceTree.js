import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RiBookletLine } from "react-icons/ri";

export class ResourceTreeCard extends Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="content">
            <h1>{this.props.level}</h1>
            <h5>{this.props.info}</h5>
            <p>Courses : {this.props.content}.</p>
            <div className="btn">
              <Link to={this.props.accessLink}>
                Resources <RiBookletLine />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ResourceTreeCard;
