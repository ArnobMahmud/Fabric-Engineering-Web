import React, { Component } from "react";
import data from "../../json/Level2Term2/Level2Term2-data.json";
import { ResourceArea } from "../../Palette";
import NoteDataCard from "../../widgets/NoteDataCard";
export class Level2Term2 extends Component {
  render() {
    return (
      <>
        <ResourceArea>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              {data.map((e) => (
                <div className="col-lg-5 col-md-6 col-sm-12">
                  <NoteDataCard
                    course={e.course}
                    courseCode={e.courseCode}
                    lecturer={e.lecturer}
                    accessLink={e.access}
                  />
                </div>
              ))}
            </div>
          </div>
        </ResourceArea>
      </>
    );
  }
}

export default Level2Term2;
