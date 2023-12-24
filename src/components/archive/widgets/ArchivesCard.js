import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ImTree } from "react-icons/im";

class ArchivesDataCard extends Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="content">
            <h1>{this.props.title}</h1>
            <p>{this.props.subTitle}</p>
            <div className="btn">
              <Link to={this.props.accessLink}>
                Details Tree <ImTree />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ArchivesDataCard;
