import React from "react";
import { LabInfoArea } from "../../config/custom";

export default function Level3Term2Lab() {
  return (
    <LabInfoArea>
      <div className="container">
        <div className="row justify-content-center">
          <div className="card col-xl-12 col-md-12 col-sm-12">
            <div className="section-title">
              <h1>Group - A</h1>
            </div>
            <table>
              <tr>
                <th>Day</th>
                <th>9:50AM - 11:30AM</th>
                <th>10:40AM - 12:20PM</th>
                <th>2:00PM - 3:40PM</th>
              </tr>
              <tbody>
                <tr>
                  <td>Wednesday</td>
                  <td>-</td>
                  <td>
                    Application of Computer in Fabric Manufacturing (ACFM)
                  </td>
                  <td>Fabric Structure & Design (FSD)</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>Weaving(Wvg) II</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card col-xl-12 col-md-12 col-sm-12">
            <div className="section-title">
              <h1>Group - B</h1>
            </div>
            <table>
              <tr>
                <th>Day</th>
                <th>9:50AM - 11:30AM</th>
                <th>10:40AM - 12:20PM</th>
                <th>3:40PM - 5:20PM</th>
              </tr>
              <tbody>
                <tr>
                  <td>Sunday</td> 
                  <td>-</td>
                  <td>Weaving(Wvg) II</td>
                  <td>Fabric Structure & Design (FSD)</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>
                    Application of Computer in Fabric Manufacturing (ACFM)
                  </td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card col-xl-12 col-md-12 col-sm-12">
            <div className="section-title">
              <h1>Group - C</h1>
            </div>
            <table>
              <tr>
                <th>Day</th>
                <th>10:40AM - 12:20PM</th>
                <th>11:30AM - 1:10PM</th>
                <th>2:00PM - 3:40PM</th>
              </tr>
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>-</td>
                  <td>
                    Application of Computer in Fabric Manufacturing (ACFM)
                  </td>
                  <td>Fabric Structure & Design (FSD)</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>Weaving(Wvg) II</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LabInfoArea>
  );
}
