import React from "react";
import styled from "styled-components";

const FolderPathCard = (props) => {
  return (
    <FolderDecoration>
      <div className="card">
        <div className="content">
          <h1>{props.title}</h1>
          <h5>{props.subTitle}</h5>
          <p>{props.description}</p>
          <div className="link">
            {props.driveLink}
          </div>
        </div>
      </div>
    </FolderDecoration>
  );
};
export default FolderPathCard;

const FolderDecoration = styled.div`
  .link a {
    width: 35%;
    text-decoration: none;
    text-align: center;
    background-color: transparent;
    color: #0c253a;
    padding: 10px 5px;
    border: 2px solid #0c253a;
    border-radius: 30px;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    display: inline-block;
  }

  .link a:hover {
    background-color: #0c253a;
    border: 2px solid #0c253a;
    color: #e9dddd;
  }
`;
