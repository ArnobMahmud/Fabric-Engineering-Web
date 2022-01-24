import axios from "axios";
import React, { useState, useEffect } from "react";
import { CourseArea } from "../../../config/Palette";
import BCEInfo from "../../../database/lecturerData/Level1Term1/BCEInfo";
import CustomSkeletonStructure from "../../../screens/skeleton/CustomSkeletonStructure";

const BCETable = () => {
  const [resource, setResource] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      axios
        .get(
          "https://fabricweb-backend-server.herokuapp.com/api/v1/resources/bce1-1"
        )
        .then((response) => {
          setResource(response.data);
          setLoading(false);
        });
    }, 2500);
    return () => clearTimeout(timing);
  }, []);

  return (
    <div>
      <CourseArea>
        <div className="container">
          <div className="row justify-content-center">
            <div className="card col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xsm-12">
              <div className="section-title">
                <h1>Business &amp; Communicative English (BCE)</h1>
              </div>
              <table>
                <tbody>
                  {loading ? (
                    <tr>
                      <th>
                        <CustomSkeletonStructure />
                      </th>
                      <th>
                        <CustomSkeletonStructure />
                      </th>
                      <th>
                        <CustomSkeletonStructure />
                      </th>
                      <th>
                        <CustomSkeletonStructure />
                      </th>
                    </tr>
                  ) : (
                    <tr>
                      <th>Date</th>
                      <th>Lecturer</th>
                      <th>Discussed Topics</th>
                      <th>Resources</th>
                    </tr>
                  )}
                </tbody>
                <tbody>
                  {loading
                    ? Array(30)
                        .fill()
                        .map((item, index) => (
                          <tr>
                            <td>
                              <CustomSkeletonStructure />
                            </td>
                            <td>
                              <CustomSkeletonStructure />
                            </td>
                            <td>
                              <CustomSkeletonStructure />
                            </td>
                            <td className="link">
                              <CustomSkeletonStructure />
                            </td>
                          </tr>
                        ))
                    : resource.map((row) => (
                        <tr key={row.key}>
                          <td>{row.date}</td>
                          <td>{row.lecturer}</td>
                          <td>{row.discussedTopics}</td>
                          <td className="link">
                            <a
                              href={
                                row.driveLink === 404 ? "404" : row.driveLink
                              }
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
      <BCEInfo />
    </div>
  );
};

export default BCETable;
