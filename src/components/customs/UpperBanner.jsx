import React, { Component } from "react";
import styled from "styled-components";
import { FcBinoculars } from "react-icons/fc";
import { IconContext } from "react-icons";
import bannerImg from "../../assets/topbanner.png";

class UpperBanner extends Component {
  render() {
    return (
      <div>
        <TopBannerArea>
          <div className="top-bnr-overlay">
            <div className="home-shield row text-center justify-content-between">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <a
                  href="https://fabricengineering.netlify.app"
                  rel="noreferrer"
                >
                  <img
                    src="https://api.netlify.com/api/v1/badges/944bd3d0-a153-41b9-9da2-5ebd88a18994/deploy-status"
                    alt="cq"
                  />
                </a>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xsm-12">
                  <div className="top-over-details-part text-left">
                    <h1>Fabric Engineering</h1>
                    <p>
                      Fabric Engineering is one of the basic textile engineering
                      branches with its large application in weaving, knitting
                      and non-woven. The purpose of this department is to
                      develop engineers who, in combination of their knowledge,
                      skills and latest technologies, can face challenge of the
                      market and ensure product quality to meet the demand of
                      the time.
                    </p>
                    <div className="btn">
                      <a
                        href="https://www.butex.edu.bd/department-of-fabric-engineering-2/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <IconContext.Provider value={{ size: "25" }}>
                          Learn More <FcBinoculars />
                        </IconContext.Provider>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TopBannerArea>
      </div>
    );
  }
}

export default UpperBanner;

const TopBannerArea = styled.div`
  background-image: url(${bannerImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .top-bnr-overlay {
    height: 850px;
    background: ${({ theme }) => theme.topBnrOverlay};
  }

  .top-over-details-part {
    position: relative;
    width: 50%;
    padding: 250px 0px;
  }

  .top-over-details-part h1 {
    font-family: "Ubuntu";
    color: ${({ theme }) => theme.topBnrH1};
    font-size: 3rem;
  }
  .top-bnr-overlay .video {
    position: absolute;
    width: 100%;
    height: inherit;
    z-index: -1;
    object-fit: cover;
  }
  .top-over-details-part p {
    line-height: 1.7;
    padding-top: 15px;
    font-size: 18px;
    font-family: Raleway;
    font-weight: 500;
    color: ${({ theme }) => theme.topBnrParagraph};
  }
  .home-shield {
    position: absolute;
    bottom: 110px;
    right: 20px;
  }

  @media (max-width: 991px) {
    .top-over-details-part {
      width: 70%;
      padding: 250px 0px;
    }
    .home-shield {
      position: absolute;
      bottom: 15px;
      right: 20px;
    }
    .top-bnr-overlay {
      height: 750px;
      background: ${({ theme }) => theme.topBnrOverlay};
    }

    .top-bnr-overlay .video {
      height: inherit;
    }
  }

  @media (max-width: 767px) {
    .home-shield {
      position: absolute;
      bottom: 20px;
      right: 10px;
    }

    .top-over-details-part {
      width: 100%;
      padding: 200px 20px 100px;
    }
    .top-over-details-part h1 {
      font-size: 1.1 rem;
    }
    .top-over-details-part h1 {
      font-size: 30px;
    }
    .top-over-details-part p {
      font-size: 16px;
    }
  }
`;
