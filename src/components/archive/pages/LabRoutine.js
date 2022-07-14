import React from "react";
import ArchiveCard from "../widgets/ArchivesCard";
import { InfoArea } from "../Palette";

export default function LabRoutine() {
  return (
    <InfoArea>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-md-6 col-sm-12">
            <ArchiveCard
              title="Level 1 - Term 1"
              subTitle="Group-wise lab routine."
              accessLink="/l1t1lab"
            />
          </div>
          <div className="col-xl-5 col-md-6 col-sm-12">
            <ArchiveCard
              title="Level 1 - Term 2"
              subTitle="Group-wise lab routine."
              accessLink="/l1t2lab"
            />
          </div>
          <div className="col-xl-5 col-md-6 col-sm-12">
            <ArchiveCard
              title="Level 2 - Term 1"
              subTitle="Group-wise lab routine."
              accessLink="/l2t1lab"
            />
          </div>
        </div>
      </div>
    </InfoArea>
  );
}
