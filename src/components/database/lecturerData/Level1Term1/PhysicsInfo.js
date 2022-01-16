import React, { Component } from "react";
import MentorData from "../../../widgets/MentorDataCard";
import { InfoArea } from "../../../config/Palette";

export class PhysicsInfo extends Component {
  render() {
    return (
      <div>
        <InfoArea>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <MentorData
                  name="Hedayet Sir"
                  info="Physics"
                  contact="01816111561"
                />
              </div>
              <div className="col-lg-4 col-md-6  col-sm-12">
                <MentorData
                  name="Harun Sir"
                  info="Physics"
                  contact="01717156042"
                />
              </div>
            </div>
          </div>
        </InfoArea>
      </div>
    );
  }
}

export default PhysicsInfo;
