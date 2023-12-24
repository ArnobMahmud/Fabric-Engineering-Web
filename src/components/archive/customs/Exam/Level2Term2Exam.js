import React from "react";
import { SafeArea } from "../../config/custom";

export default function Level2Term2Exam() {
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
                  <td>24 May, 2023</td>
                  <td>10:00AM - 1:00PM</td>
                  <td>WPE 205</td>
                  <td>Wet Processing (WP) I</td>
                </tr>
                <tr>
                  <td>28 May, 2023</td>
                  <td>10:00AM - 1:00PM</td>
                  <td>TEM 201</td>
                  <td>Fundamentals of Marketing (FMkt)</td>
                </tr>
                <tr>
                  <td>1 Jun, 2023</td>
                  <td>10:00AM - 1:00PM</td>
                  <td>MDM 201</td>
                  <td>
                    Fundamentals of Electrical & Electronics Engineering (FEEE)
                  </td>
                </tr>
                <tr>
                  <td>5 Jun, 2023</td>
                  <td>10:00AM - 1:00PM</td>
                  <td>AE 205</td>
                  <td>Apparel Manufacturing (AM) I</td>
                </tr>
                <tr>
                  <td>10 Jun, 2023</td>
                  <td>10:00AM - 1:00PM</td>
                  <td>YE 209</td>
                  <td>Textile Physics (TP)</td>
                </tr>
                <tr>
                  <td>14 Jun, 2023</td>
                  <td>10:00AM - 1:00PM</td>
                  <td>FE 205</td>
                  <td>Weaving (Wvg) I</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SafeArea>
  );
}
