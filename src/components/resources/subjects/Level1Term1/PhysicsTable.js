import axios from "axios";
import React, { useState, useEffect } from "react";
import { CourseArea } from "../../../config/Palette";
import PhysicsInfo from "../../../database/lecturerData/Level1Term1/PhysicsInfo";

const PhysicsTable = () => {
  const [resource, setResource] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://fabricweb-backend-server.herokuapp.com/api/getResources/phy1-1"
      )
      .then((response) => {
        setResource(response.data);
      });
  }, []);
  
  return (
    <div>
      <CourseArea>
        <div className="container">
          <div className="row justify-content-center">
            <div className="card col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="section-title">
                <h1>Physics</h1>
              </div>
              <table>
                <tbody>
                  <tr>
                    <th>Date</th>
                    <th>Lecturer</th>
                    <th>Discussed Topics</th>
                    <th colSpan={3}>Resources</th>
                  </tr>
                </tbody>
                <tbody>
                  {resource.map((row) => (
                    <tr key={row._id}>
                      <td>{row.Date}</td>
                      <td>{row.Lecturer}</td>
                      <td>{row.DiscussedTopics}</td>
                      <td className="link">
                        <a
                          href={row.DriveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </CourseArea>
      <PhysicsInfo />
    </div>
  );
};

export default PhysicsTable;
