import React, { Component } from "react";
import MentorData from "../../../widgets/MentorDataCard";
import { InfoArea } from "../../../config/Palette";

export class ChemistryInfo extends Component {
  render() {
    return (
      <div>
        <InfoArea>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <MentorData
                  name="Farzana Mam"
                  info="Chemistry"
                  contact="01937126127"
                />
              </div>
              <div className="col-lg-4 col-md-6  col-sm-12">
                <MentorData
                  name="Bristy Mam"
                  info="Chemistry"
                  contact="01795112913"
                />
              </div>
            </div>
          </div>
        </InfoArea>
      </div>
    );
  }
}

export default ChemistryInfo;
