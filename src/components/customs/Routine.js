import React from "react";
import Rotimg from "../../assets/exs.png";
import RoutineCard from "../widgets/RoutineCard";
import styled from "styled-components";

const Routine = () => {
  return (
    <>
      <RoutineArea id="routine">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <img src={Rotimg} alt="" srcSet />
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div className="section-title">
                <RoutineCard
                  title="Routine"
                  driveLink="https://drive.google.com/file/d/1tQfwJulaJvKpJ2snhavqDAgX0KovXeIz/view"
                  command="Learn More"
                />
              </div>
            </div>
          </div>
        </div>
      </RoutineArea>
    </>
  );
};

export default Routine;

const RoutineArea = styled.div`
  margin: 20px 0px 60px;
  .card {
    background: ${({ theme }) => theme.cardBG};
    align-items: center;
  }
  .section-title {
    width: 100%;
    font-size: 48px;
  }

  .section-title h1 {
    font-weight: 900;
    color: #15202bd1;
    font-size: 26px;
    font-weight: 400;
  }
  img {
    max-width: 100%;
  }
  .btn {
    margin-top: 30px;
    padding: 10px 20px;
    border: 2px solid #0c253a;
    background-color: transparent;
    border-radius: 25px;
    transition: all linear 0.3s;
  }
  .btn a {
    color: #0c253a;
  }
  .btn:hover {
    background-color: #0c253a;
  }
  .btn:hover a {
    color: #a89f9f;
  }

  @media (max-width: 991px) {
  }
  @media (max-width: 767px) {
  }
`;
