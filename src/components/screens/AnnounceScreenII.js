import React, { Component } from "react";
import announceImg from "../../assets/svg/night.svg";
import ScreenCardI from "../widgets/screencard/ScreenCardI";
import { ScreenArea } from "../config/Palette";

export class AnnounceScreenII extends Component {
  render() {
    return (
      <>
        <ScreenArea>
          <div className="container card">
            <ScreenCardI
              imgPath={announceImg}
              title="Student's Achievement"
              description="Contents are coming soon🖤"
            />
          </div>
        </ScreenArea>
      </>
    );
  }
}

export default AnnounceScreenII;
