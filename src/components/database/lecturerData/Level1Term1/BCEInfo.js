import React, { Component } from "react";
import MentorData from "../../../widgets/MentorDataCard";
import { InfoArea } from "../../../config/Palette";
export class BCEInfo extends Component {
  render() {
    return (
      <div>
        <InfoArea>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <MentorData
                  name="Salahuddin Sir"
                  info="BCE"
                  contact="01937662691"
                />
              </div>
              <div className="col-lg-4 col-md-6  col-sm-12">
                <MentorData name="Adnan Sir" info="BCE" contact="01717064028" />
              </div>
            </div>
          </div>
        </InfoArea>
      </div>
    );
  }
}

export default BCEInfo;
