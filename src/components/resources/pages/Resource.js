import React from "react";
import ResourceTreeCard from "../widgets/ResourceTree";
import { ResourceArea } from "../Palette";

export default function Resource() {
  return (
    <div>
      <ResourceArea>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-5 col-md-6 col-sm-12">
              <ResourceTreeCard
                level="Level 1 - Term 1"
                content="Physics I, Chemistry I, Mathematics I, Business & Communicative English (BCE), Natural Textile Fiber (NTF)"
                accessLink="/level1-term1"
              />
            </div>
            <div className="col-xl-5 col-md-6 col-sm-12">
              <ResourceTreeCard
                level="Level 1 - Term 2"
                content="Physics II, Chemistry II, Mathematics II, Engineering Materials (EM), Polymer Science & Engineering (PSE), Computer Programming (CP)"
                accessLink="/level1-term2"
              />
            </div>
          </div>
        </div>
      </ResourceArea>
    </div>
  );
}
