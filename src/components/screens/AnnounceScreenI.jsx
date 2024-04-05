import React, { Component } from "react";
import announceImg from "../../assets/svg/bearie-partner.svg";
import ScreenCardI from "../widgets/screencard/ScreenCardI";
import { ScreenArea } from "../config/Palette";

export class AnnounceScreenI extends Component {
  render() {
    return (
      <>
        <ScreenArea>
          <div className="container">
            <ScreenCardI
              imgPath={announceImg}
              title="Get CT & Term Exam Updates!"
              description="Contents are coming soon!🖤"
            />
          </div>
        </ScreenArea>
      </>
    );
  }
}

export default AnnounceScreenI;
