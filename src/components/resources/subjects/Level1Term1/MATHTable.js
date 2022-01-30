import axios from "axios";
import React, { useState, useEffect } from "react";
import { CourseArea } from "../../../config/Palette";
import MathInfo from "../../../database/lecturerData/Level1Term1/MathInfo";
import CustomSkeletonStructure from "../../../screens/skeleton/CustomSkeletonStructure";

const MATHTable = () => {
  const [resource, setResource] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      axios
        .get(
          "https://fabricweb-backend-server.herokuapp.com/api/v1/resources/math1-1"
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
            <div className="card col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="section-title">
                <h1>Mathematics I</h1>
              </div>
              <input
                type="text"
                placeholder="Search here..."
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
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
                    : resource
                        .filter((val) => {
                          if (search === "") {
                            return val;
                          } else if (
                            val.discussedTopics
                              .toLowerCase()
                              .includes(search.toLowerCase()) ||
                            val.date.includes(search) ||
                            val.lecturer
                              .toLowerCase()
                              .includes(search.toLowerCase())
                          ) {
                            return val;
                          }
                        })
                        .map((row) => (
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
      <MathInfo />
    </div>
  );
};

export default MATHTable;
