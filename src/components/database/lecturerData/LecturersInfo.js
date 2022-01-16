import React, { Component } from "react";
import data from "../../json/mentors-data.json";
import { InfoArea } from "../config/Palette";
import MentorData from "../widgets/MentorDataCard";

export class LecturersInfo extends Component {
  render() {
    return (
      <div> 
        <InfoArea>
          <div className="container">
            <div className="row justify-content-center">
              {data.map((e) => (
                <div className="col-lg-4">
                  <MentorData
                    name={e.name}
                    info={e.info}
                    contact={e.contact}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfoArea>
      </div>
    );
  }
}

export default LecturersInfo;
