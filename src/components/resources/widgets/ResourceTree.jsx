import React from "react";
import { ResourceTree } from "../config/Palette";
import { Link } from "react-router-dom";
import { RiBookletLine } from "react-icons/ri";

const ResourceTreeCard = (props) => {
  return (
    <ResourceTree>
      <div className="card">
        <div className="content">
          <h1>{props.level}</h1>
          <h5>{props.info}</h5>
          <p>Courses : {props.content}.</p>
          <div className="btn">
            <Link to={props.accessLink} state={{data : props.data}}>
              Resources <RiBookletLine />
            </Link>
          </div>
        </div>
      </div>
    </ResourceTree>
  );
};

export default ResourceTreeCard;
