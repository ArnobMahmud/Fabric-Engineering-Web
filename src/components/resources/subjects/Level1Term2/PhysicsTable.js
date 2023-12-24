import React, { useState, useEffect } from "react";
import { CourseArea } from "../../Palette";
import ResourceHandler from "../../ResourceHandler";
import { RESOURCE_URL } from "../../api/api";

const PhysicsTable = () => {
  const [resource, setResource] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(`${RESOURCE_URL}/phy1-2`)
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
    <div>
      <CourseArea>
        <div className="container">
          <div className="row justify-content-center">
            <div className="card col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="section-title">
                <h1>Physics II</h1>
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
    </div>
  );
};

export default PhysicsTable;
