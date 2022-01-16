import React from "react";
import Skeleton from "react-loading-skeleton";
import CustomResourceCard from "../../resources/subjects/CustomResourceScreen";

const SkeletonResourceCard = () => {
  return (
    <>
      {Array(20)
        .fill()
        .map((item, index) => (
          <CustomResourceCard
            Date={
              <Skeleton
                style={{ borderRadius: 20 }}
                height={35}
                width={`100%`}
              />
            }
            Lecturer={
              <Skeleton
                style={{ borderRadius: 20 }}
                height={35}
                width={`80%`}
              />
            }
            DiscussedTopics={
              <Skeleton
                style={{ borderRadius: 20 }}
                height={35}
                width={`60%`}
              />
            }
            DriveLink={
              <Skeleton
                style={{ borderRadius: 20 }}
                height={60}
                width={`100%`}
              />
            }
          />
        ))}
    </>
  );
};

export default SkeletonResourceCard;
