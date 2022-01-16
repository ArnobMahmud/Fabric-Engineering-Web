import React from "react";
import Skeleton from "react-loading-skeleton";
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
                        <Skeleton
                          style={{ borderRadius: 10 }}
                          height={40}
                          width={`60%`}
                        />
                      }
                      countryImg={
                        <Skeleton
                          style={{ borderRadius: 10 }}
                          height={50}
                          width={50}
                        />
                      }
                      cases={
                        <Skeleton
                          style={{ borderRadius: 10 }}
                          height={20}
                          width={`100%`}
                        />
                      }
                      recovered={
                        <Skeleton
                          style={{ borderRadius: 10 }}
                          height={20}
                          width={`100%`}
                        />
                      }
                      todayRecovered={
                        <Skeleton
                          style={{ borderRadius: 10 }}
                          height={20}
                          width={`100%`}
                        />
                      }
                      todayCases={
                        <Skeleton
                          style={{ borderRadius: 10 }}
                          height={20}
                          width={`100%`}
                        />
                      }
                      todayDeaths={
                        <Skeleton
                          style={{ borderRadius: 10 }}
                          height={20}
                          width={`100%`}
                        />
                      }
                      deaths={
                        <Skeleton
                          style={{ borderRadius: 10 }}
                          height={20}
                          width={`100%`}
                        />
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
