import React from "react";
import styled from "styled-components";
import CustomCount from "../widgets/componentcard/CouterComp";
import { BiShieldAlt } from "react-icons/bi";
import { FiSlack } from "react-icons/fi";
import { ImBook } from "react-icons/im";

const CounterUp = () => {
  return (
    <>
      <CounterArea>
        <div className="container">
          <div className="row justify-content-center text-center align-items-center">
            <div className="col-lg-3 col-md-4 col-sm-12 single-class">
              <CustomCount
                icons={<BiShieldAlt />}
                title="Secured Development"
                paragraph="Developed by JavaScript software MERN stack!"
              />
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12 single-class">
              <CustomCount
                icons={<ImBook />}
                title="Coursewise Resources"
                paragraph="Online class lectures provided by coursewise segments!"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 single-class">
              <CustomCount
                icons={<FiSlack />}
                title="Regular Monitorization"
                paragraph="Keeping resources and pdf stuffs update regularly."
              />
            </div>
          </div>
        </div>
      </CounterArea>
    </>
  );
};

export default CounterUp;

const CounterArea = styled.div`
  padding: 80px 0px 60px;
  background: ${({ theme }) => theme.counterBg};
  align-items: center;
  .card {
    padding: 100px 20px;
    height: auto;
    background: ${({ theme }) => theme.cardBg};
    justify-content: space-around;
    align-items: center;
  }
  h1 {
    font-size: 30px;
    display: inline-table;
    color: #0c253a;
    margin: 20px 0px;
    font-family: "Josefin Sans";
  }
  p {
    text-align: center;
    color: #2d2d2d;
    font-size: 18px;
  }
  @media (max-width: 991px) {
    .card {
      padding: 100px 10px;
    }
    h1 {
      font-size: 22px;
    }
    .container {
      max-width: 100%;
    }
  }
  @media (max-width: 767px) {
    .card {
      padding: 120px 40px;
    }
  }
`;
