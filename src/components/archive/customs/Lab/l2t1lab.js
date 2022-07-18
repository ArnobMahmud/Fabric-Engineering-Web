import React from "react";
import { SafeArea } from "../../config/custom";

export default function Level2Term1Lab() {
  return (
    <SafeArea>
      <div className="container">
        <div className="row justify-content-center">
          <div className="card col-xl-11 col-md-12 col-sm-12">
            <div className="section-title">
              <h1>Group - A</h1>
            </div>
            <table>
              <tr>
                <th>Day</th>
                <th>8:00AM - 9:40AM</th>
                <th>9:50AM - 11:30AM</th>
              </tr>
              <tbody>
                <tr>
                  <td>Sunday</td>
                  <td>Yarn Manufacturing (YM) - I</td>
                  <td>Fabric & Yarn Testing (FYT)</td>
                </tr>
                <tr>
                  <td>Monday</td>
                  <td>-</td>
                  <td>Fundamentals of Mechanical Engineering (FME)</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>Weaving Preparatory Process (WvgPP)</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card col-xl-11 col-md-12 col-sm-12">
            <div className="section-title">
              <h1>Group - B</h1>
            </div>
            <table>
              <tr>
                <th>Day</th>
                <th>8:00AM - 9:40AM</th>
                <th>9:50AM - 11:30AM</th>
              </tr>
              <tbody>
                <tr>
                  <td>Sunday</td>
                  <td>Weaving Preparatory Process (WvgPP)</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Monday</td>
                  <td>Yarn Manufacturing (YM) - I</td>
                  <td>Fabric & Yarn Testing (FYT)</td>{" "}
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>-</td>
                  <td>Fundamentals of Mechanical Engineering (FME)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card col-xl-11 col-md-12 col-sm-12">
            <div className="section-title">
              <h1>Group - C</h1>
            </div>
            <table>
              <tr>
                <th>Day</th>
                <th>8:00AM - 9:40AM</th>
                <th>9:50AM - 11:30AM</th>
              </tr>
              <tbody>
                <tr>
                  <td>Sunday</td>
                  <td>-</td>
                  <td>Fundamentals of Mechanical Engineering (FME)</td>
                </tr>
                <tr>
                  <td>Monday</td>
                  <td>Weaving Preparatory Process (WvgPP)</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>Yarn Manufacturing (YM) - I</td>
                  <td>Fabric & Yarn Testing (FYT)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SafeArea>
  );
}
