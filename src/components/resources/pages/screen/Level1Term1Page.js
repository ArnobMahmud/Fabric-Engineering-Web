import React, { Component } from "react";
import ResourceDataCard from "../../widgets/ResourceDataCard";
import data from "../../json/Level1Term1/Level1Term1-data.json";
import { ResourceArea } from "../../Palette";
import PdfResourceCard from "../../widgets/PdfResourceCard";
export class Level1Term1 extends Component {
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
                  subTitle="Level 1 - Term 1"
                  description="PDF & Utilities of each courses."
                  driveLink="https://drive.google.com/drive/folders/1-e1yNWk6uSCJzgxruVZs9Iouh03nBodk"
                />
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12">
                <PdfResourceCard
                  title="Class Record Folder I"
                  subTitle="Level 1 - Term 1"
                  description="Daily recorded Class Lecture of each courses."
                  driveLink="https://drive.google.com/drive/folders/1y-8HauM7A2omTtFOO4GRFy37ZieE79dR?usp=sharing"
                />
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12">
                <PdfResourceCard
                  title="Class Record Folder II"
                  subTitle="Level 1 - Term 1"
                  description="Daily recorded Class Lecture of each courses."
                  driveLink="https://drive.google.com/drive/folders/10uRMf-lBwmKrQAaclx5-Q_KA0QIZ3_AF?usp=sharing"
                />
              </div>
            </div>
          </div>
        </ResourceArea>
      </>
    );
  }
}

export default Level1Term1;
