import React from "react";
import { SafeArea } from "../../config/custom";

export default function Level2Term1Exam() {
  return (
    <SafeArea>
      <div className="container">
        <div className="row justify-content-center">
          <div className="card col-xl-11 col-md-12 col-sm-12">
            <div className="section-title">
              <h1>Fabric Engineering</h1>
            </div>
            <table>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Course Code</th>
                <th>Course</th>
              </tr>
              <tbody>
                <tr>
                  <td>13 Nov, 2022</td>
                  <td>10:00AM - 1:00PM</td>
                  <td>YE 201</td>
                  <td>Fiber & Yarn Testing (FYT)</td>
                </tr>
                <tr>
                  <td>17 Nov, 2022</td>
                  <td>10:00AM - 1:00PM</td>
                  <td>IPE 203</td>
                  <td>Fundamentals of Mechanical Engineering (FME)</td>
                </tr>
                <tr>
                  <td>21 Nov, 2022</td>
                  <td>10:00AM - 1:00PM</td>
                  <td>MS 201</td>
                  <td>Statistics</td>
                </tr>
                <tr>
                  <td>27 Nov, 2022</td>
                  <td>10:00AM - 1:00PM</td>
                  <td>YE 203</td>
                  <td>Man Made Textile Fibers (MMTF)</td>
                </tr>
                <tr>
                  <td>01 Dec, 2022</td>
                  <td>10:00AM - 1:00PM</td>
                  <td>YE 213</td>
                  <td>Yarn Manufacturing (YM) - I</td>
                </tr>
                <tr>
                  <td>05 Dec, 2022</td>
                  <td>10:00AM - 1:00PM</td>
                  <td>FE 203</td>
                  <td>Weaving Preparatory Process (WvgPP)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SafeArea>
  );
}
