import React, { useState, useEffect } from "react";
import { RESOURCE_URL } from "../../api/api";
import { NOTE_URL } from "../../api/api";
import { OnlineResourceArea } from "../../Palette";
import { CourseArea } from "../../Palette";
import ResourceHandler from "../../ResourceHandler";
import NoteHandler from "../../NoteHandler";

const StatisticsZone = () => {
  const [resource, setResource] = useState([]);
  const [search, setSearch] = useState("");
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(`${RESOURCE_URL}/stat2-1`)
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

  useEffect(() => {
    try {
      fetch(`${NOTE_URL}/stat2-1`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setNote(data);
          setLoading(false);
        });
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  return (
    <>
      <CourseArea>
        <div className="container">
          <div className="row justify-content-center">
            <div className="card col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="section-title">
                <h1>Statistics</h1>
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
      <OnlineResourceArea>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <NoteHandler loading={loading} note={note} />
          </div>
        </div>
      </OnlineResourceArea>
    </>
  );
};
export default StatisticsZone;
