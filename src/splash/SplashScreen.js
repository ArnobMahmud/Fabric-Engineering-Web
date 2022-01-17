import React from "react";
import Spinner from "./Spinner";
import Logo from "../assets/logo.png";
import styled from "styled-components";

const SplashScreen = (props) => {
  return (
    <SplashArea>
      <div className="container-fluid">
        <div className="section-handler">
          <div className="col-xl-8 col-md-8 col-sm-12">
            <Spinner loading={props.loading} />
          </div>
          <div className="col-xl-12 col-md-12 col-sm-12">
            <div className="bottom-ind">
              <img className="logo" src={Logo} alt="" srcSet />
              <h4>Fabric Engineering 46 (BUTEX)</h4>
              <p>Developed by Arnob Mahmud</p>
            </div>
          </div>
        </div>
      </div>
    </SplashArea>
  );
};

export default SplashScreen;

const SplashArea = styled.div`
  background: linear-gradient(390deg, #a19aae, #ddbea9);
  .bottom-ind {
    text-align: center;
    position: absolute;
    bottom: 10px;
    right: 0;
    left: 0;
  }
  .bottom-ind .logo {
    width: 10%;
  }
  .bottom-ind h4 {
    text-align: center;
    color: #283f50;
    font-family: "Rubik";
  }
  .bottom-ind p {
    text-align: center;
    color: #283f50;
    font-size: 21px;
    font-family: "Rubik";
    font-weight: 400;
  }
  @media (max-width: 991px) {
    .bottom-ind h4 {
      font-size: 19px;
    }
    .bottom-ind .logo {
      width: 25%;
    }
    .bottom-ind p {
      font-size: 18px;
    }
  }
`;
