import React from "react";
import { ResourceArea } from "../components/resources/config/Palette";
import data from "../json/folders.json";
import DocumentsResourceCard from "../components/widgets/componentcard/DocumentsResourceCard";

function DocumentsPage() {
  return (
    <ResourceArea>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          {data.map((e) => (
            <div className="col-xl-4 col-md-6 col-sm-12">
              <DocumentsResourceCard
                title={e.header}
                subTitle={e.title}
                description={e.description}
                driveLink={e.access}
              />
            </div>
          ))}
        </div>
      </div>
    </ResourceArea>
  );
}

export default DocumentsPage;
