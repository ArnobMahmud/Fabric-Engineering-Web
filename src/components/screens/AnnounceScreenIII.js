import React from "react";
import announceImg from "../../assets/svg/404.svg";
import ScreenCardI from "../widgets/screencard/ScreenCardIII";
import { ScreenArea } from "../config/Palette";

const AnnounceScreenIII = () => {
  return (
    <>
      <ScreenArea>
        <div className="container card">
          <ScreenCardI
            imgPath={announceImg}
            title="Lecture not found!🤔"
            description="Video hasn't been uploaded yet! I'll link the video as soon as I get it."
          />
        </div>
      </ScreenArea>
    </>
  );
};

export default AnnounceScreenIII;
