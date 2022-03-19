import React from "react";
import { Link } from "react-router-dom";
import { ImBook } from "react-icons/im";

const NoteDataCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="content">
          <h1>{props.course}</h1>
          <h5>Course Code : {props.courseCode}</h5>
          <div className="btn">
            <Link to={props.accessLink}>
              Find Notes <ImBook />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteDataCard;
