import React, { useState, useEffect } from "react";
import { ImBook } from "react-icons/im";
import CustomSkeletonStructure from "../../screens/skeleton/CustomSkeletonStructure";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styled from "styled-components";

const FolderPathCard = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      setLoading(false);
    }, 2600);
    return () => clearTimeout(timing);
  }, []);

  return (
    <FolderDecoration>
      <div className="card">
        {loading ? (
          <>
            <div className="content">
              <h1>
                {
                  <SkeletonTheme baseColor="#d3b683" highlightColor="#d3d9d1">
                    <Skeleton
                      style={{ borderRadius: 20 }}
                      height={28}
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
                      height={28}
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
                      height={28}
                      width={`100%`}
                    />
                  </SkeletonTheme>
                }
              </p>
              <div className="link">
                <SkeletonTheme baseColor="#d3b683" highlightColor="#d3d9d1">
                  <Skeleton
                    style={{ borderRadius: 20 }}
                    height={40}
                    width={`35%`}
                  />
                </SkeletonTheme>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="content">
              <h1>{props.title}</h1>
              <h5>{props.subTitle}</h5>
              <p>{props.description}</p>
              <div className="link">
                <a href={props.driveLink} target="_blank" rel="noreferrer">
                  Visit Here <ImBook />
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </FolderDecoration>
  );
};
export default FolderPathCard;

const FolderDecoration = styled.div`
  .link a {
    width: 35%;
    text-decoration: none;
    text-align: center;
    background-color: transparent;
    color: #0c253a;
    padding: 10px 5px;
    border: 2px solid #0c253a;
    border-radius: 30px;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    display: inline-block;
  }

  .link a:hover {
    background-color: #0c253a;
    border: 2px solid #0c253a;
    color: #e9dddd;
  }
`;
