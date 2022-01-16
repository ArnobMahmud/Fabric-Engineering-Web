import React from "react";
import { CourseArea } from "../../../config/Palette";
import { Component } from "react";
import data from "../../json/Level1Term2/physics-data.json";

class PhysicsTable extends Component {
  render() {
    return (
      <div>
        <CourseArea>
          <div className="container">
            <div className="row justify-content-center">
              <div className="card col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="section-title">
                  <h1>Physics II</h1>
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
                    {data.map((row) => (
                      <tr key={row.key}>
                        <td>{row.Date}</td>
                        <td>{row.Lecturer}</td>
                        <td>{row.DiscussedTopics}</td>
                        <td className="link">
                          <a
                            href={row.DriveLink === 404 ? "404" : row.DriveLink}
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
        {/* <PhysicsInfo /> */}
      </div>
    );
  }
}

export default PhysicsTable;
