import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ImBook } from "react-icons/im";

export class ResourceDataCard extends Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="content">
            <h1>{this.props.course}</h1>
            <h5>Course Code : {this.props.courseCode}</h5>
            <p>Lecturers : {this.props.lecturer}.</p>
            <div className="btn">
              <Link to={this.props.accessLink}>
                Find Resources <ImBook />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ResourceDataCard;
