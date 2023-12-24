import React, { useState, useEffect } from "react";
import { CourseArea } from "../../Palette";
import { RESOURCE_URL } from "../../api/api";
import ResourceHandler from "../../ResourceHandler";

const BCETable = () => {
  const [resource, setResource] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(`${RESOURCE_URL}/bce1-1`)
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
  }, []);

  return (
    <CourseArea>
      <div className="container">
        <div className="row justify-content-center">
          <div className="card col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xsm-12">
            <div className="section-title">
              <h1>Business &amp; Communicative English (BCE)</h1>
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

export default BCETable;
