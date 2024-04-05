import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import styled from "styled-components";

const CustomSkeletonStructure = () => {
  return (
    <SkeletonConfig>
      <SkeletonTheme baseColor="#d3b683" highlightColor="#d3d9d1">
        <Skeleton
          className="skeleton"
          style={{
            borderRadius: 20,
            marginTop: 5,
            marginBottom: 5,
          }}
          height={35}
          width={`100%`}
        />
      </SkeletonTheme>
    </SkeletonConfig>
  );
};

export default CustomSkeletonStructure;

const SkeletonConfig = styled.div`
  @media (max-width: 767px) {
    .skeleton {
      height: 30px !important;
      margin-top: 0px !important;
      margin-bottom: 0px !important;
    }
  }
`;
