import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import CustomCovidCard from "../../covid19/CustomCard";

const SkeletonCovidCard = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-between">
          {Array(60)
            .fill()
            .map((item, index) => (
              <div className="col-lg-6 col-md-6 col-sm-12 align-items-center">
                <div className="card">
                  <div key={index}>
                    <CustomCovidCard
                      countryName={
                        <SkeletonTheme
                          baseColor="#d3b683"
                          highlightColor="#d3d9d1"
                        >
                          <Skeleton
                            style={{ borderRadius: 10 }}
                            height={40}
                            width={`60%`}
                          />
                        </SkeletonTheme>
                      }
                      countryImg={
                        <SkeletonTheme
                          baseColor="#d3b683"
                          highlightColor="#d3d9d1"
                        >
                          <Skeleton
                            style={{ borderRadius: 10 }}
                            height={50}
                            width={50}
                          />
                        </SkeletonTheme>
                      }
                      cases={
                        <SkeletonTheme
                          baseColor="#d3b683"
                          highlightColor="#d3d9d1"
                        >
                          <Skeleton
                            style={{ borderRadius: 10 }}
                            height={20}
                            width={`100%`}
                          />
                        </SkeletonTheme>
                      }
                      recovered={
                        <SkeletonTheme
                          baseColor="#d3b683"
                          highlightColor="#d3d9d1"
                        >
                          <Skeleton
                            style={{ borderRadius: 10 }}
                            height={20}
                            width={`100%`}
                          />
                        </SkeletonTheme>
                      }
                      todayRecovered={
                        <SkeletonTheme
                          baseColor="#d3b683"
                          highlightColor="#d3d9d1"
                        >
                          <Skeleton
                            style={{ borderRadius: 10 }}
                            height={20}
                            width={`100%`}
                          />
                        </SkeletonTheme>
                      }
                      todayCases={
                        <SkeletonTheme
                          baseColor="#d3b683"
                          highlightColor="#d3d9d1"
                        >
                          <Skeleton
                            style={{ borderRadius: 10 }}
                            height={20}
                            width={`100%`}
                          />
                        </SkeletonTheme>
                      }
                      todayDeaths={
                        <SkeletonTheme
                          baseColor="#d3b683"
                          highlightColor="#d3d9d1"
                        >
                          <Skeleton
                            style={{ borderRadius: 10 }}
                            height={20}
                            width={`100%`}
                          />
                        </SkeletonTheme>
                      }
                      deaths={
                        <SkeletonTheme
                          baseColor="#d3b683"
                          highlightColor="#d3d9d1"
                        >
                          <Skeleton
                            style={{ borderRadius: 10 }}
                            height={20}
                            width={`100%`}
                          />
                        </SkeletonTheme>
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SkeletonCovidCard;
