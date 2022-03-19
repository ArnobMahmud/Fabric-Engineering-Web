import React from "react";
import { Link } from "react-router-dom";
import { GiNotebook } from "react-icons/gi";
import { IconContext } from "react-icons";

const NoteDataCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="content">
          <h1>{props.course}</h1>
          <h5>Course Code : {props.courseCode}</h5>
          <div className="btn">
            <IconContext.Provider value={{ size: "20" }}>
              <Link to={props.accessLink}>
                Find Notes <GiNotebook />
              </Link>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteDataCard;
