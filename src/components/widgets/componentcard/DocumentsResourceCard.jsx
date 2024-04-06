import React from "react";
import { ImBook } from "react-icons/im";
import { ResourceTree } from "../../resources/config/Palette";

const DocumentsResourceCard = (props) => {
  return (
    <ResourceTree>
      <div className="card">
        <div className="content">
          <h1>{props.title}</h1>
          <h5>{props.subTitle}</h5>
          <p>{props.description}</p>
          <div className="btn">
            <a href={props.driveLink} target="_blank" rel="noreferrer">
              Visit Here <ImBook />
            </a>
          </div>
        </div>
      </div>
    </ResourceTree>
  );
};
export default DocumentsResourceCard;
