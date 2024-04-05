import React, { Component } from "react";
import ScreenCardIV from "../widgets/screencard/ScreenCardIV";
import { ScreenArea } from "../config/Palette";
import infoImg from "../../assets/svg/amusement.svg";

export class NoRoutineScreen extends Component {
  render() {
    return (
      <>
        <ScreenArea>
          <div className="container">
            <ScreenCardIV
              imgPath={infoImg}
              title="Searching Exam Routine?"
              description="Not added yet!"
            />
          </div>
        </ScreenArea>
      </>
    );
  }
}

export default NoRoutineScreen;
