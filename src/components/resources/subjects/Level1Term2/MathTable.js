import axios from "axios";
import React, { useState, useEffect } from "react";
import { CourseArea } from "../../../config/Palette";
// import SkeletonResourceCard from "../../../screens/skeleton/SkeletonResourceCard";
// import CustomResourceCard from "../CustomResourceScreen";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const MATHTable = () => {
  const [resource, setResource] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      axios
        .get(
          "https://fabricweb-backend-server.herokuapp.com/api/getResources/math1-2"
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
                <h1>Mathematics II</h1>
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
                  {loading
                    ? Array(30)
                        .fill()
                        .map((item, index) => (
                          <tr>
                            <td>
                              <SkeletonTheme
                                baseColor="#d3b683"
                                highlightColor="#d3d9d1"
                              >
                                <Skeleton
                                  style={{ borderRadius: 20 }}
                                  height={30}
                                  width={`100%`}
                                />
                              </SkeletonTheme>
                            </td>
                            <td>
                              <SkeletonTheme
                                baseColor="#d3b683"
                                highlightColor="#d3d9d1"
                              >
                                <Skeleton
                                  style={{ borderRadius: 20 }}
                                  height={30}
                                  width={`100%`}
                                />
                              </SkeletonTheme>
                            </td>
                            <td>
                              <SkeletonTheme
                                baseColor="#d3b683"
                                highlightColor="#d3d9d1"
                              >
                                <Skeleton
                                  style={{ borderRadius: 20 }}
                                  height={30}
                                  width={`100%`}
                                />
                              </SkeletonTheme>
                            </td>
                            <td className="link">
                              <SkeletonTheme
                                baseColor="#d3b683"
                                highlightColor="#d3d9d1"
                              >
                                <Skeleton
                                  style={{ borderRadius: 20 }}
                                  height={30}
                                  width={`100%`}
                                />
                              </SkeletonTheme>
                            </td>
                          </tr>
                        ))
                    : resource.map((row) => (
                        <tr key={row.key}>
                          <td>{row.Date}</td>
                          <td>{row.Lecturer}</td>
                          <td>{row.DiscussedTopics}</td>
                          <td className="link">
                            <a
                              href={
                                row.DriveLink === 404 ? "404" : row.DriveLink
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
      {/* <MathInfo /> */}
    </div>
  );
};

export default MATHTable;
