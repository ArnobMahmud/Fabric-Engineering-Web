import React from "react";
import { InfoArea } from "../config/palette";
import ArchivesDataCard from "../widgets/ArchivesCard";
import data from "../json/exam-data.json";

export default function TermExamRoutine() {
  return (
    <InfoArea>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {data.map((e) => (
            <div className="col-xl-5 col-md-6 col-sm-12">
              <ArchivesDataCard
                title={e["level-term"]}
                subTitle={e.description}
                accessLink={e.nav}
                data={e}
              />
            </div>
          ))}
        </div>
      </div>
    </InfoArea>
  );
}
