import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { ResourceArea } from "../config/Palette";
import ResourceDataCard from "../widgets/ResourceDataCard";

const LevelTermInfoPage = () => {
  const params = useParams();
  const refID = params.refID;
  const location = useLocation();
  const data = location.state?.data;
  console.log(refID);
  
  return (
    <>
      <ResourceArea>
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            {data["course-details"].map((f) => (
              <div className="col-lg-5 col-md-6 col-sm-12">
                <ResourceDataCard
                  course={f.course}
                  courseCode={f.courseCode}
                  lecturer={f.lecturer}
                  accessLink={f.access}
                  data={f}
                />
              </div>
            ))}
          </div>
        </div>
      </ResourceArea>
    </>
  );
};

export default LevelTermInfoPage;
