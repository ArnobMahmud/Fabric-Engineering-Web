import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiBookletLine } from "react-icons/ri";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ResourceTreeCard = (props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timing);
  }, []);

  return (
    <>
      {loading ? (
        <div className="card">
          <div className="content">
            <h1>
              {
                <SkeletonTheme baseColor="#d3b683" highlightColor="#d3d9d1">
                  <Skeleton
                    style={{ borderRadius: 20 }}
                    height={30}
                    width={`100%`}
                  />
                </SkeletonTheme>
              }
            </h1>
            <h5>
              {
                <SkeletonTheme baseColor="#d3b683" highlightColor="#d3d9d1">
                  <Skeleton
                    style={{ borderRadius: 20 }}
                    height={30}
                    width={`100%`}
                  />
                </SkeletonTheme>
              }
            </h5>
            <p>
              {
                <SkeletonTheme baseColor="#d3b683" highlightColor="#d3d9d1">
                  <Skeleton
                    style={{ borderRadius: 20 }}
                    height={30}
                    width={`100%`}
                  />
                </SkeletonTheme>
              }
            </p>
            <div>
              <SkeletonTheme baseColor="#d3b683" highlightColor="#d3d9d1">
                <Skeleton
                  style={{ borderRadius: 50 }}
                  height={50}
                  width={`40%`}
                />
              </SkeletonTheme>
            </div>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="content">
            <h1>{props.level}</h1>
            <h5>{props.info}</h5>
            <p>Courses : {props.content}.</p>
            <div className="btn">
              <Link to={props.accessLink}>
                Resources <RiBookletLine />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResourceTreeCard;
