import React, { Component } from "react";
import ScreenCardIV from "../widgets/screencard/ScreenCardIV";
import { ScreenArea } from "../config/Palette";
import infoImg from "../../assets/svg/towing.svg";

export class InformationScreen extends Component {
  render() {
    return (
      <>
        <ScreenArea>
          <div className="container">
            <ScreenCardIV
              imgPath={infoImg}
              title="Searching Documents?"
              description="Not added yet!"
            />
          </div>
        </ScreenArea>
      </>
    );
  }
}

export default InformationScreen;
