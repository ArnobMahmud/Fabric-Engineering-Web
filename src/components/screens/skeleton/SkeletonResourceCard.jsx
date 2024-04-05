import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import CustomResourceCard from "../../resources/subjects/CustomResourceScreen";

const SkeletonResourceCard = () => {
  return (
    <>
      {Array(20)
        .fill()
        .map((item, index) => (
          <CustomResourceCard
            Date={
              <SkeletonTheme baseColor="#d3b683">
                <Skeleton
                  style={{ borderRadius: 20 }}
                  height={35}
                  width={`100%`}
                />
              </SkeletonTheme>
            }
            Lecturer={
              <SkeletonTheme highlightColor="#d3d9d1">
                <Skeleton
                  style={{ borderRadius: 20 }}
                  height={35}
                  width={`80%`}
                />
              </SkeletonTheme>
            }
            DiscussedTopics={
              <SkeletonTheme>
                <Skeleton
                  style={{ borderRadius: 20 }}
                  height={35}
                  width={`60%`}
                />
              </SkeletonTheme>
            }
            DriveLink={
              <SkeletonTheme>
                <Skeleton
                  style={{ borderRadius: 20 }}
                  height={60}
                  width={`100%`}
                />
              </SkeletonTheme>
            }
          />
        ))}
    </>
  );
};

export default SkeletonResourceCard;
