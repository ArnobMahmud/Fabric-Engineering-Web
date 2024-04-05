import React, { useState, useEffect } from "react";
import { RESOURCE_URL } from "../api/api";
import { CourseArea } from "../Palette";
import ResourceHandler from "../ResourceHandler";
import { useParams, useLocation } from "react-router-dom";

const CoursePage = () => {
  const params = useParams();
  const refID = params.refID;
  const location = useLocation();
  const data = location.state?.data;
  console.log(refID);

  const [resource, setResource] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(`${RESOURCE_URL}/${data.access}`, {method: "GET"})
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setResource(data);
          setLoading(false);
        });
    } catch (err) {
      console.log(err.message);
    }
  }, [data.access]);

  return (
    <CourseArea>
      <div className="container">
        <div className="row justify-content-center">
          <div className="card col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xsm-12">
            <div className="section-title">
              <h1>{data.course}</h1>
            </div>
            <ResourceHandler
              search={search}
              setSearch={setSearch}
              loading={loading}
              resource={resource}
            />
          </div>
        </div>
      </div>
    </CourseArea>
  );
};

export default CoursePage;
