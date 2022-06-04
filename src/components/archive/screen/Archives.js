import React from "react";
import ArchiveCard from "../widgets/ArchivesCard";
import { InfoArea } from "../Palette";
export default function StudentsHomeScreen() {
  return (
    <InfoArea>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <ArchiveCard
              title="Covid'19 Updates"
              subTitle="Real time Covid'19 updates of every country worldwide!"
              accessLink="/covid19updates"
            />
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <ArchiveCard
              title="Student's Info"
              subTitle="Academic info of all fabric engineering 46th batch's student."
              accessLink="/studentsinfo"
            />
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <ArchiveCard
              title="Lab Routine"
              subTitle="Level 1 - Term 2 Lab Routine of Fabric Engineering Department."
              accessLink="/l1t2lab"
            />
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <ArchiveCard
              title="Exam Routine"
              subTitle="Level 1 - Term 2 Final Exam Routine of Fabric Engineering Department."
              accessLink="/l1t2exam"
            />
          </div>
        </div>
      </div>
    </InfoArea>
  );
}
