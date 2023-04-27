import React, { useState, useEffect } from "react";
import { SafeArea } from "../config/custom";
import data from "../json/students-data.json";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const StudentsInfo = () => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
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
                <input
                  type="text"
                  placeholder="Search info here..."
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <table>
                  <tbody>
                    {loading ? (
                      <tr>
                        <th>
                          {
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
                          }
                        </th>
                        <th>
                          {
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
                          }
                        </th>
                        <th>
                          {
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
                          }
                        </th>
                        <th>
                          {
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
                          }
                        </th>
                      </tr>
                    ) : (
                      <tr>
                        <th>Name</th>
                        <th>ID No</th>
                        <th>Blood Group</th>
                        <th>Contact No</th>
                      </tr>
                    )}
                  </tbody>
                  <tbody>
                    {loading
                      ? data.map((val, key) => (
                          <tr key={key}>
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
                      : data
                          .filter((val) => {
                            if (search === "") {
                              return val;
                            } else if (
                              val.name
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                              val.id
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                              val["blood group"]
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                              val["contact no"]
                                .toLowerCase()
                                .includes(search.toLowerCase())
                            ) {
                              return val;
                            }
                            return null;
                          })
                          .map((val, key) => (
                            <tr key={key}>
                              <td>{val.name}</td>
                              <td>{val.id}</td>
                              <td>{val["blood group"]}(ve)</td>
                              <td>{val["contact no"]}</td>
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
