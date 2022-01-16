import React from "react";
import styled from "styled-components";
import Bannerimg from "../../assets/banner.png";
import { FcBinoculars } from "react-icons/fc";
import { IconContext } from "react-icons";

const Banner = () => {
  return (
    <>
      <BannerArea>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xsm-12" />
            <div className="banner-overlay text-left col-lg-6 col-md-6 col-sm-6 col-xsm-6">
              <h1>Free E-books</h1>
              <p>
                Textile Study Center is a virtual topic based library that will
                cover all textile topics. Textile students from any university
                can contribute here.They have categorized all the topics
                according to BUTEX syllabus.
              </p>
              <div className="btn">
                <a
                  href="https://textilestudycenter.com/textile-books-free-donwload/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconContext.Provider value={{ size: "25" }}>
                    Learn More <FcBinoculars />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
          </div>
        </div>
      </BannerArea>
    </>
  );
};

export default Banner;

const BannerArea = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${Bannerimg});
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  .banner-overlay {
    padding: 200px 0px;
  }
  h1 {
    color: #e0245e;
    font-family: Ubuntu;
  }
  p {
    margin-top: 20px;
    color: #e9dddd;
    font-family: Rubik;
    text-align: justify;
  }
  .btn {
    margin-top: 30px;
    padding: 10px 20px;
    border: 2px solid #17bf63;
    background-color: transparent;
    border-radius: 25px;
    -webkit-transition: all linear 0.5s;
    transition: all linear 0.5s;
  }

  .btn a {
    font-family: Ubuntu;
    color: #17bf63;
    text-decoration: none;
    -webkit-transition: all linear 0.5s;
    transition: all linear 0.5s;
    font-weight: 400;
  }

  .btn:hover {
    background-color: #17bf63;
    border: 2px solid transparent;
  }

  .btn:hover a {
    color: #15202b;
  }
  @media (max-width: 991px) {
    .banner-overlay {
      padding: 120px 0px;
    }
  }
  @media (max-width: 767px) {
    background-position: bottom;
    width: 100%;
    p {
      font-size: 14px;
    }
    .banner-overlay {
      padding: 100px 15px;
      width: 100%;
      padding-left: 30px;
    }
  }
`;
