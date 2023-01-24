import React, { Component } from "react";
import data from "../../json/Level2Term2/Level2Term2-data.json";
import { ResourceArea } from "../../Palette";
import ResourceDataCard from "../../widgets/ResourceDataCard";
import PdfResourceCard from "../../widgets/PdfResourceCard";
export class Level2Term2 extends Component {
  render() {
    return (
      <>
        <ResourceArea>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              {data.map((e) => (
                <div className="col-lg-5 col-md-6 col-sm-12">
                  <ResourceDataCard
                    course={e.course}
                    courseCode={e.courseCode}
                    lecturer={e.lecturer}
                    accessLink={e.access}
                  />
                </div>
              ))}
              <div className="col-lg-5 col-md-6 col-sm-12">
                <PdfResourceCard
                  title="PDF Folder"
                  subTitle="Level 2 - Term 2"
                  description="PDF & Utilities of each courses."
                  driveLink="https://drive.google.com/drive/folders/1k9kNjElICJvh1vo9RUrz_J7AASLgmZpk"
                />
              </div>
            </div>
          </div>
        </ResourceArea>
      </>
    );
  }
}

export default Level2Term2;
