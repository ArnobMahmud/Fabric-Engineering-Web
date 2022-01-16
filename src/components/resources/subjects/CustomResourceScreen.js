import React from "react";

const CustomResourceCard = (props) => {
  return (
    <>
      <tr key={props.key}>
        <td>{props.Date}</td>
        <td>{props.Lecturer}</td>
        <td>{props.DiscussedTopics}</td>
        <td className="link">
          <a
            href={props.DriveLink === 404 ? "404" : props.DriveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Lecture Video
          </a>
        </td>
      </tr>
    </>
  );
};

export default CustomResourceCard;
