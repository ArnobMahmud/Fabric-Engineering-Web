import React from "react";
import { InfoArea } from "../config/palette";
import data from "../json/lab-data.json";
import ArchivesDataCard from "../widgets/ArchivesCard";

const LabRoutine = () => {
  return (
    <InfoArea>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {data.map((e) => (
            <div className="col-xl-5 col-md-6 col-sm-12">
              <ArchivesDataCard
                title={e.title}
                subTitle={e.subtitle}
                accessLink={e.semester}
                data={e}
              />
            </div>
          ))}
        </div>
      </div>
    </InfoArea>
  );
};

export default LabRoutine;
