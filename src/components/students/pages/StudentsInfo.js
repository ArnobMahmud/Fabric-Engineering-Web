import React from "react";
import { SafeArea } from "../config/custom";
import data from "../json/students-data.json";

const StudentsInfo = () => {
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
                    {data.map((row) => (
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
