import React from "react";
import StudentsDataCard from "../widgets/StudentsCornerCard";
import { InfoArea } from "../Palette";
export default function StudentsHomeScreen() {
  return (
    <InfoArea>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <StudentsDataCard
              title="Student's Info"
              subTitle="Academic info of all fabric engineering 46th batch's student."
              accessLink="/studentsinfo"
            />
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <StudentsDataCard
              title="Student's Achievement"
              subTitle="Academic achievement of fabric engineering 46th batch's student."
              accessLink="/studentsachievement"
            />
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <StudentsDataCard
              title="Lab Routine"
              subTitle="Level 1 - Term 2 Lab Routine of Fabric Engineering Department."
              accessLink="/l1t2lab"
            />
          </div>
        </div>
      </div>
    </InfoArea>
  );
}
