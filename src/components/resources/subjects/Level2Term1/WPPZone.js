import React from "react";
import { ResourceArea } from "../../Palette";
import FolderPathCard from "../../widgets/FolderPathCard";
import data from "../../json/Level2Term1/wpp.json";

const WPPZone = () => {
  return (
    <>
      <ResourceArea>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            {data.map((e) => (
              <div className="col-lg-5 col-md-6 col-sm-12">
                <FolderPathCard
                  title={e.title}
                  subTitle={e.subtitle}
                  description={e.description}
                  driveLink={e.driveLink}
                />
              </div>
            ))}
          </div>
        </div>
      </ResourceArea>
    </>
  );
};
export default WPPZone;
