import React, { Component } from "react";
import ScreenCardIV from "../widgets/screencard/ScreenCardIV";
import { ScreenArea } from "../config/Palette";
import infoImg from "../../assets/svg/construction.svg";

export class ErrorPage extends Component {
  render() {
    return (
      <>
        <ScreenArea>
          <div className="container">
            <ScreenCardIV
              imgPath={infoImg}
              title="404 Not Found!"
            />
          </div>
        </ScreenArea>
      </>
    );
  }
}

export default ErrorPage;
