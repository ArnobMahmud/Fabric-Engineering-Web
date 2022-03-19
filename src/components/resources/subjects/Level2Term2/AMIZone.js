import axios from "axios";
import React, { useState, useEffect } from "react";
import { ResourceArea } from "../../Palette";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { ImBook } from "react-icons/im";
import FolderPathCard from "../../widgets/FolderPathCard";

const AMIZone = () => {
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      axios
        .get(
          "https://fabricweb-backend-server.herokuapp.com/api/v1/notes/am2-2"
        )
        .then((response) => {
          setNote(response.data);
          setLoading(false);
        });
    }, 2500);
    return () => clearTimeout(timing);
  }, []);

  return (
    <>
      <ResourceArea>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            {loading
              ? Array(4)
                  .fill()
                  .map((_, index) => (
                    <div className="col-lg-5 col-md-6 col-sm-12">
                      <FolderPathCard
                        title={
                          <SkeletonTheme
                            baseColor="#d3b683"
                            highlightColor="#d3d9d1"
                          >
                            <Skeleton
                              style={{ borderRadius: 20 }}
                              height={28}
                              width={`100%`}
                            />
                          </SkeletonTheme>
                        }
                        subTitle={
                          <SkeletonTheme
                            baseColor="#d3b683"
                            highlightColor="#d3d9d1"
                          >
                            <Skeleton
                              style={{ borderRadius: 20 }}
                              height={28}
                              width={`100%`}
                            />
                          </SkeletonTheme>
                        }
                        description={
                          <SkeletonTheme
                            baseColor="#d3b683"
                            highlightColor="#d3d9d1"
                          >
                            <Skeleton
                              style={{ borderRadius: 20 }}
                              height={28}
                              width={`100%`}
                            />
                          </SkeletonTheme>
                        }
                        driveLink={
                          <SkeletonTheme
                            baseColor="#d3b683"
                            highlightColor="#d3d9d1"
                          >
                            <Skeleton
                              style={{ borderRadius: 20 }}
                              height={40}
                              width={`35%`}
                            />
                          </SkeletonTheme>
                        }
                      />
                    </div>
                  ))
              : note.map((e, key) => (
                  <div key={key} className="col-lg-5 col-md-6 col-sm-12">
                    <div className="card">
                      <div className="content">
                        <h1>{e.title}</h1>
                        <h5>{e.subTitle}</h5>
                        <p>{e.description}</p>
                        <div className="btn">
                          <a
                            href={e.driveLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Visit Here <ImBook />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </ResourceArea>
    </>
  );
};
export default AMIZone;
