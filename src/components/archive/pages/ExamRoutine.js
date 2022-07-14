import React from "react";
import { InfoArea } from "../Palette";
import ArchivesDataCard from "../widgets/ArchivesCard";

export default function TermExamRoutine() {
  return (
    <InfoArea>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-md-6 col-sm-12">
            <ArchivesDataCard
              title="Level 1 - Term 1"
              subTitle="Term final exam routine of Fabric Engineering."
              accessLink="/l1t1exam"
            />
          </div>
          <div className="col-xl-5 col-md-6 col-sm-12">
            <ArchivesDataCard
              title="Level 1 - Term 2"
              subTitle="Term final exam routine of Fabric Engineering."
              accessLink="/l1t2exam"
            />
          </div>
          <div className="col-xl-5 col-md-6 col-sm-12">
            <ArchivesDataCard
              title="Level 2 - Term 1"
              subTitle="Term final exam routine of Fabric Engineering."
              accessLink="/l2t1exam"
            />
          </div>
        </div>
      </div>
    </InfoArea>
  );
}
