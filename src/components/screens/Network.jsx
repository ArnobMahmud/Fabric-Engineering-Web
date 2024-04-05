import React, { Component } from "react";
import ScreenCardVI from "../widgets/screencard/ScreenCardVI";
import { ScreenArea } from "../config/Palette";
import infoImg from "../../assets/svg/city.svg";

export class ErrorPage extends Component {
  render() {
    return (
      <>
        <ScreenArea>
          <div className="container-fluid">
            <ScreenCardVI
              imgPath={infoImg}
              title="No Internet Found!"
              description="You're in offline. Please check your internet connection."
            />
          </div>
        </ScreenArea>
      </>
    );
  }
}

export default ErrorPage;
