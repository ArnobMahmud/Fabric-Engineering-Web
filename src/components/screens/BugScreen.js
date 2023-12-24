import React from "react";
import bugImg from "../../assets/svg/bug.svg";
import ScreenCardIV from "../widgets/screencard/ScreenCardIV";
import styled from "styled-components";

export default function BugPage() {
  return (
    <>
      <BugArea>
        <div className="container">
          <ScreenCardIV
            imgPath={bugImg}
            title="Website is Unexpectedly Down!"
            description="This site is experiencing Technical Difficulties & alerts for Vulnerable Dependencies.
            I'm working on to fix the bugs ~ Arnob Mahmud"
          />
        </div>
      </BugArea>
    </>
  );
}

const BugArea = styled.div`
  margin: 20px 0px;
`;
