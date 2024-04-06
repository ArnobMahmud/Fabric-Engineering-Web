import React, { Component } from "react";
import ScreenCardIV from "../widgets/screencard/ScreenCardIV";
import infoImg from "../../assets/svg/amusement.svg";

export class NoRoutineScreen extends Component {
  render() {
    return (
      <>
        <div className="container">
          <ScreenCardIV
            imgPath={infoImg}
            title="Searching Exam Routine?"
            description="Not added yet!"
          />
        </div>
      </>
    );
  }
}

export default NoRoutineScreen;
