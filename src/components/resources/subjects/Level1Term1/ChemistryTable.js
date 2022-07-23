import axios from "axios";
import React, { useState, useEffect } from "react";
import { CourseArea } from "../../../config/Palette";
import CustomSkeletonStructure from "../../../screens/skeleton/CustomSkeletonStructure";

const ChemistryTable = () => {
  const [resource, setResource] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      axios
        .get(
          "https://fabric-web-backend-server.herokuapp.com/api/v1/resources/chem1-1"
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
                <h1>Chemistry I</h1>
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
                          return null;
                        })
                        .map((val, key) => (
                          <tr key={key}>
                            <td>{val.date}</td>
                            <td>{val.lecturer}</td>
                            <td>{val.discussedTopics}</td>
                            <td className="link">
                              <a
                                href={
                                  val.driveLink === "" ? "404" : val.driveLink
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
    </div>
  );
};

export default ChemistryTable;
