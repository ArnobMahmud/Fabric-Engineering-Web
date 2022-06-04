import React from "react";
import { SafeArea } from "../config/custom";
export default function TermExamRoutine() {
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
                  <td>09 June, 2022</td>
                  <td>10:00AM - 1:00PM</td>
                  <td>MS 103</td>
                  <td>Mathematics - II</td>
                </tr>
                <tr>
                  <td>13 June, 2022</td>
                  <td>10:00AM - 1:00PM</td>
                  <td>PHY 103</td>
                  <td>Physics - II</td>
                </tr>
                <tr>
                  <td>19 June, 2022</td>
                  <td>10:00AM - 1:00PM</td>
                  <td>CHEM 103</td>
                  <td>Chemistry - II</td>
                </tr>
                <tr>
                  <td>23 June, 2022</td>
                  <td>10:00AM - 1:00PM</td>
                  <td>IPE 101</td>
                  <td>Engineering Materials (EM)</td>
                </tr>
                <tr>
                  <td>27 June, 2022</td>
                  <td>10:00AM - 1:00PM</td>
                  <td>MDM 101</td>
                  <td>Computer Programming (CP)</td>
                </tr>
                <tr>
                  <td>03 July, 2022</td>
                  <td>10:00AM - 1:00PM</td>
                  <td>WPE 101</td>
                  <td>Polymer Science & Engineering (PSE)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SafeArea>
  );
}
