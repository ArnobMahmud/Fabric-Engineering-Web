import React, { Component } from "react";
import ScreenCardII from "../widgets/screencard/ScreenCardII";
import { ScreenArea } from "../config/Palette";
import infoImg from "../../assets/balb.png";

export class InformationScreen extends Component {
  render() {
    return (
      <>
        <ScreenArea>
          <div className="container">
            <ScreenCardII
              imgPath={infoImg}
              title="Searching Syllabus?"
              description="Not added yet!"
            />
          </div>
        </ScreenArea>
      </>
    );
  }
}

export default InformationScreen;
