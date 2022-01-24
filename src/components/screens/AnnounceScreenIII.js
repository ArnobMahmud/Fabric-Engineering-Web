import React from "react";
import announceImg from "../../assets/svg/404.svg";
import ScreenCardIV from "../widgets/screencard/ScreenCardIV";
import { ScreenArea } from "../config/Palette";

const AnnounceScreenIII = () => {
  return (
    <>
      <ScreenArea>
        <div className="container">
          <ScreenCardIV
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
