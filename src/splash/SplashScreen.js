import React from "react";
import Spinner from "./Spinner";
import Logo from "../assets/logo.png";
import styled from "styled-components";

const SplashScreen = (props) => {
  return (
    <SplashArea>
      <div className="container">
        <div className="section-handler">
          <Spinner loading={props.loading} />
          <div className="bottom-ind">
            <img className="logo" src={Logo} alt="" srcSet />
            <h4>Fabric Engineering 46 (BUTEX)</h4>
            <p>Developed by Arnob Mahmud</p>
          </div>
        </div>
      </div>
    </SplashArea>
  );
};

export default SplashScreen;

const SplashArea = styled.div`
  height: 100vh;
  background: linear-gradient(200deg, #a19aae, #ddbea9);
  .bottom-ind {
    padding: 0px 0px;
    text-align: center;
    position: absolute;
    bottom: 0;
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