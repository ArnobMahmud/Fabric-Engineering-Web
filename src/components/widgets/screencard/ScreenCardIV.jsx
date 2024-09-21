import React, { Component } from "react";
import styled from "styled-components";

export class ScreenCardIV extends Component {
  render() {
    return (
      <ErrorScreen>
        <div className="row handler">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img className="w-100" src={this.props.imgPath} alt="dataImg" />
          </div>
          <div className="col-lg-8 col-md-9 col-sm-12">
            <div className="content text-center">
              <h1>{this.props.title}</h1>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </ErrorScreen>
    );
  }
}

export default ScreenCardIV;

const ErrorScreen = styled.div`
  .handler {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .content {
    margin-top: 50px;
    text-align: center;
    display: inline-block;
  }
  h1 {
    font-size: 24px;
    font-family: "Josefin Sans";
    color: ${({ theme }) => theme.errorh1} !important;
  }
  p {
    font-family: "Raleway";
    color: ${({ theme }) => theme.errorPara} !important;
    font-size: 16px;
  }
  @media (max-width: 991px) {
    .handler {
      align-items: flex-end;
      justify-content: space-around;
    }
  }
  @media (max-width: 767px) {
    .handler img {
      margin: 10% 0;
    }
    padding: 20px 15px 0px;

    .content {
      align-items: flex-end;
    }
  }
`;
