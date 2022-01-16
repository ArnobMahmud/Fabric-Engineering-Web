import React from "react";
import AzimpurBus from "../../assets/Azimpur Route.png";
import UttaraBus from "../../assets/Uttara Route.png";
import MirpurBus from "../../assets/Mirpur Route.png";
import PurandhkBus from "../../assets/Jatrabari Route.png";
import Card from "../widgets/BusCard";
import styled from "styled-components";

const BusRoute = () => {
  return (
    <>
      <BusRouteSec id="bsr">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="bus1 col-lg-5 col-md-12 col-sm-12">
              <Card routeTitle="Uttara Route" routeImg={UttaraBus} />
            </div>
            <div className="bus2 col-lg-5 col-md-12 col-sm-12">
              <Card routeTitle="Mirpur Route" routeImg={MirpurBus} />
            </div>
            <div className="bus3 col-lg-5 col-md-12 col-sm-12">
              <Card routeTitle="Azimpur Route" routeImg={AzimpurBus} />
            </div>
            <div className="bus4 col-lg-5 col-md-12 col-sm-12">
              <Card routeTitle="Jatrabari Route" routeImg={PurandhkBus} />
            </div>
          </div>
        </div>
      </BusRouteSec>
    </>
  );
};

export default BusRoute;

const BusRouteSec = styled.div`
  margin-top: 200px;
  h2 {
    color: ${({ theme }) => theme.h2};
  }
  .bus1,
  .bus2,
  .bus3,
  .bus4 {
    align-items: center;
  }
  img {
    margin-top: 10px;
    max-width: 100%;
    border-radius: 15px;
  }
  .card {
    background: ${({ theme }) => theme.cardBg};
    margin-bottom: 30px;
    align-items: center;
  }
  @media (max-width: 991px) {
    .bus1,
    .bus2,
    .bus3,
    .bus4 {
      margin: 0;
      padding: 10px;
    }
    .card {
      padding: 30px 40px;
    }
  }
  @media (max-width: 767px) {
    margin-top: 180px;
    .bus1,
    .bus2,
    .bus3,
    .bus4 {
      margin: 0;
      padding: 10px;
    }
    img {
      max-width: 90%;
    }
    .card {
      padding: 30px 10px;
    }
  }
`;
