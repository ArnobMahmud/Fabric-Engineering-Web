import React from "react";
import ArchiveCard from "../widgets/ArchivesCard";
import { InfoArea } from "../config/palette";

export default function ArchiveScreen() {
  return (
    <InfoArea>
      <div className="container-fluid">
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
              subTitle="Lab Routine of Fabric Engineering Department."
              accessLink="/labroutine"
            />
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <ArchiveCard
              title="Exam Routine"
              subTitle="Term Final Exam Routine of Fabric Engineering Department."
              accessLink="/termexamroutine"
            />
          </div>
        </div>
      </div>
    </InfoArea>
  );
}
