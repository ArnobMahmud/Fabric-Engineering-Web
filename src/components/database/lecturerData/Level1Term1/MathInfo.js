import React, { Component } from "react";
import MentorData from "../../../widgets/MentorDataCard";
import { InfoArea } from "../../../config/Palette";

export class MathInfo extends Component {
  render() {
    return (
      <div>
        <InfoArea>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <MentorData
                  name="Anwar Sir"
                  info="Mathematics"
                  contact="01719296229"
                />
              </div>
              <div className="col-lg-4 col-md-6  col-sm-12">
                <MentorData
                  name="Anup Sir"
                  info="Mathematics"
                  contact="01730624387"
                />
              </div>
            </div>
          </div>
        </InfoArea>
      </div>
    );
  }
}

export default MathInfo;
