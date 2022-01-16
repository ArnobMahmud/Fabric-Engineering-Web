import React, { Component } from "react";
import MentorData from "../../../widgets/MentorDataCard";
import { InfoArea } from "../../../config/Palette";

export class NTFInfo extends Component {
  render() {
    return (
      <div>
        <InfoArea>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <MentorData
                  name="Bashar Sir"
                  info="NTF"
                  contact="01684132207"
                />
              </div>
              <div className="col-lg-4 col-md-6  col-sm-12">
                <MentorData
                  name="Tanima Mam"
                  info="NTF"
                  contact="01902449635"
                />
              </div>
            </div>
          </div>
        </InfoArea>
      </div>
    );
  }
}

export default NTFInfo;
