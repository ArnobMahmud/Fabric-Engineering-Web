import React from "react";
import { Link } from "react-router-dom";
import { ImBook } from "react-icons/im";
import { ResourceTree } from "../Palette";

const ResourceDataCard = (props) => {
  return (
    <ResourceTree>
      <div className="card">
        <div className="content">
          <h1>{props.course}</h1>
          <h5>Course Code : {props.courseCode}</h5>
          <p>Lecturers : {props.lecturer}.</p>
          <div className="btn">
            <Link to={props.accessLink}>
              Find Resources <ImBook />
            </Link>
          </div>
        </div>
      </div>
    </ResourceTree>
  );
};

export default ResourceDataCard;
