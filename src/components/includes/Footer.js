import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { OverlayButton } from "../config/Palette";
import FooterLink from "../widgets/FooterLink";

function Footer() {
  return (
    <div>
      <FooterArea>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 col-md-6 col-sm-12 text-center">
              <Link to="/">
                <img className="rotating" src={Logo} alt="" srcSet />
              </Link>
              <span> Our Departmental Group : </span>
              <h3>
                <a
                  href="https://www.facebook.com/groups/fabricmanufacturingengineering46/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fabric Engineering 46
                </a>
              </h3>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <FooterLink
                title="Discrete Segments"
                subTitle=""
                link1={
                  <Link className="foot-link" to="/resource">
                    Resources
                  </Link>
                }
                link2={
                  <Link className="foot-link" to="/studentsinfo">
                    Students Info
                  </Link>
                }
                link3={
                  <Link className="foot-link" to="/labroutine">
                    Lab Routine
                  </Link>
                }
                link4={
                  <Link className="foot-link" to="/termexamroutine">
                    Exam Routine
                  </Link>
                }
                link5={
                  <a
                    className="foot-link"
                    href="https://fabric-web-backend-server.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    API
                  </a>
                }
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <FooterLink
                title="Supplementary Modules"
                subTitle=" "
                link1={
                  <Link className="foot-link" to="/accessories">
                    Bus Route
                  </Link>
                }
                link2={
                  <Link className="foot-link" to="/syllabus">
                    Syllabus
                  </Link>
                }
                link3={
                  <Link className="foot-link" to="/accessories">
                    Routine
                  </Link>
                }
                link4={
                  <Link className="foot-link" to="/covid19updates">
                    Covid Updates
                  </Link>
                }
                link5={
                  <Link className="foot-link" to="/archives">
                    Archives
                  </Link>
                }
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <FooterLink
                title="Developer Panel"
                subTitle="Suggest changes for deploying next version!"
                link1={
                  <Link className="foot-link" to="/developer">
                    Developer
                  </Link>
                }
                link2={
                  <a
                    className="foot-link"
                    href="mailto: arnob.tech.me@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mail
                  </a>
                }
                link3={
                  <a
                    className="foot-link"
                    href="https://github.com/ArnobMahmud/Fabric-Engineering-Web/releases"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Current Version &nbsp;
                    <img
                      src="https://img.shields.io/github/package-json/v/ArnobMahmud/Fabric-Engineering-Web?color=lightyellow&label=yarn%20Deployed&logo=yarn&logoColor=yellow&style=plastic"
                      alt="cq"
                      srcSet
                    />
                  </a>
                }
              />
            </div>{" "}
          </div>
          <div className="cpy-rgt">
            Copyright ©2024 &nbsp;
            <span>
              <Link to="/">Fabric Engineering 46</Link>
            </span>
            &nbsp; All Rights Reserved
          </div>
          <OverlayButton className="footerOverlay">
            <a id="bottombce" href="#top">
              <i className="fa fa-arrow-circle-up" aria-hidden="true" />
              <span></span>
            </a>
          </OverlayButton>
        </div>
      </FooterArea>
    </div>
  );
}

export default Footer;

const FooterArea = styled.div`
  font-family: Raleway;
  padding: 90px 0px 10px;
  background: ${({ theme }) => theme.footerBG};
  position: relative;
  h3 {
    color: ${({ theme }) => theme.footerh3};
    font-size: 18px;
  }
  h4 {
    color: ${({ theme }) => theme.footerh4};
    font-size: 20px;
  }

  h5 {
    font-size: 18px;
    color: ${({ theme }) => theme.footerh5};
  }
  /* ul {
    text-align: left;
  } */
  ul li {
    line-height: 2;
    list-style-type: none;
  }
  span {
    display: block;
    color: ${({ theme }) => theme.footerSpan};
    padding: 5px 0px;
    font-weight: 500;
  }
  h3 a {
    text-decoration: none;
    display: block;
    color: ${({ theme }) => theme.footerLinka};
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  ul li a {
    text-decoration: none;
    display: inline-block;
    color: ${({ theme }) => theme.footerLinka};
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  ul li a:hover {
    opacity: 0.8;
  }
  .cpy-rgt {
    font-size: 16px;
    font-weight: 400;
    padding: 40px 0px 0px;
    color: ${({ theme }) => theme.footerCpyRgt};
    text-align: center;
  }
  .cpy-rgt span {
    display: inline-block;
  }
  .cpy-rgt span a {
    text-decoration: none;
    color: ${({ theme }) => theme.footerSpana};
  }
  .footerOverlay {
    margin: 0;
    bottom: 60px;
    right: 40px;
    position: absolute;
  }
  .foot-link {
    font-size: 16px;
    color: ${({ theme }) => theme.footerNav};
    margin: 5px 0px;
    font-weight: 400;
    padding: 0px;
  }
  .rotating {
    max-width: 80%;
  }

  @media (max-width: 991px) {
    .rotating {
      max-width: 40% !important;
    }
  }
  @media (max-width: 767px) {
    text-align: left;
    align-items: center;
    padding: 50px 0px 10px;
    .cpy-rgt {
      padding-top: 0px;
      font-size: 12px;
    }
    position: relative;
    ul li span {
      font-size: 18px;
    }
    ul li a {
      font-size: 15px;
    }
    ul li h4 {
      font-size: 17px;
    }
    ul li h5 {
      font-size: 16px;
    }
    .rotating {
      max-width: 40% !important;
    }
    .footerOverlay {
      bottom: 100px;
    }
  }
`;
