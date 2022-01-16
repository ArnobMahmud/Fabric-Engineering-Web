import React, { useState, useEffect } from "react";
import { SafeArea } from "../config/custom";
import data from "../json/students-data.json";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const StudentsInfo = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      setLoading(false);
    }, 3300);
    return () => clearTimeout(timing);
  }, []);
  
  return (
    <div>
      <div>
        <SafeArea>
          <div className="container">
            <div className="row justify-content-center">
              <div className="card col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xsm-12">
                <table>
                  <tr>
                    <th>Name</th>
                    <th>ID No</th>
                    <th>Blood Group</th>
                    <th>Contact No</th>
                    {/* <th>Address</th> */}
                  </tr>
                  <tbody>
                    {loading
                      ? data.map((row) => (
                          <tr key={row.key}>
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
                            {/* <td>{row.address}</td> */}
                          </tr>
                        ))
                      : data.map((row) => (
                          <tr key={row.key}>
                            <td>{row.name}</td>
                            <td>{row.id}</td>
                            <td>{row["blood group"]}(ve)</td>
                            <td>{row["contact no"]}</td>
                            {/* <td>{row.address}</td> */}
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </SafeArea>
      </div>
    </div>
  );
};

export default StudentsInfo;
