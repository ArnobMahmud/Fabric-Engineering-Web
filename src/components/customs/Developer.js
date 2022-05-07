import React from "react";
import Devimg from "../../assets/developer.png";
import styled from "styled-components";

const Developer = () => {
  return (
    <>
      <DeveloperArea>
        <div className="container">
          <div className="row justify-content-around align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 text-left">
              <div className="dev-icon">
                <img src={Devimg} alt="" />
              </div>
            </div>
            <div
              className="col-lg-5 col-md-12 col-sm-12 text-center dev-card"
              data-aos="fade-up"
              data-aos-duration={3000}
            >
              <div className="card">
                <h1>Arnob Mahmud</h1>
                <p>
                  Fabric Engineering (2020 - 1 - 2 - 047) <br />
                  Front-end Developer &amp; Flutter Application Developer.
                </p>
                <h5>Contact</h5>
                <div className="row justify-content-start">
                  <div className="social col-lg-12 col-md-12 col-sm-6">
                    <ul>
                      <li>
                        <a
                          href="http://www.facebook.com/arnob.mahmud.amd"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-square" />
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="http://www.twitter.com/@Arnob__Mahmud"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/arnobmahmud/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            className="fab fa-linkedin-in"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="http://github.com/ArnobMahmud"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="https://discord.com/channels/ArnobMahmud#5622"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-discord" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="mailto: arnob.tech.me@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fas fa-envelope" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card">
                <h3>Code Analysis</h3>
                <div className="row text-center justify-content-between shield">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <a
                      href="https://github.com/ArnobMahmud/Fabric-Engineering-Web/blob/master/LICENSE"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://img.shields.io/badge/License-MIT-critical?style=plastic&logo=appveyor&logoColor=a70023&labelColor=lightblue&color=471e61"
                        alt="mit"
                      />
                    </a>
                  </div>
                  {/* <div className="col-lg-6 col-md-6 col-sm-12">
                    <a
                      href="https://scrutinizer-ci.com/g/ArnobMahmud/Fabric-Engineering-Web"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://img.shields.io/scrutinizer/quality/g/ArnobMahmud/Fabric-Engineering-Web?color=green&label=Code%20Quality%20x%2F10&logo=Scrutinizer%20CI&logoColor=e0e0e0&style=plastic"
                        alt="cq"
                      />
                    </a>
                  </div> */}{" "}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <a
                      className="foot-link"
                      href="https://github.com/ArnobMahmud/Fabric-Engineering-Web/releases"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://img.shields.io/github/package-json/v/ArnobMahmud/Fabric-Engineering-Web?color=lightyellow&label=yarn%20Deployed&logo=yarn&logoColor=yellow&style=plastic"
                        alt="cq"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DeveloperArea>
    </>
  );
};

export default Developer;

const DeveloperArea = styled.div`
  margin: 150px 0px 60px;
  .card {
    padding: 30px 20px;
    background: ${({ theme }) => theme.cardBG};
    align-items: center;
  }
  h1 {
    font-family: Rubik;
    font-size: 36px;
    color: ${({ theme }) => theme.devTitleColor};
  }
  h3 {
    /* font-family: "Lobster Two"; */
    color: ${({ theme }) => theme.codeAnalysis};
  }
  h5 {
    color: ${({ theme }) => theme.devh5};
    font-family: "Ubuntu";
    margin: 20px 0px;
  }
  ul {
    display: inline-block;
    padding: 0px 15px;
  }
  ul li a i {
    -webkit-transition: all linear 0.3s;
    transition: all linear 0.3s;
  }
  ul li .fa-facebook-square:hover {
    color: #315aaa;
  }

  ul li .fa-twitter:hover {
    color: #19c6f1;
    list-style: none;
  }

  ul li a i {
    -webkit-transition: all linear 0.3s;
    transition: all linear 0.3s;
  }

  ul li .fa-envelope:hover {
    color: #d0f743;
  }

  ul li .fa-github:hover {
    opacity: 0.5;
  }

  ul li .fa-discord:hover {
    color: #7289d9;
  }

  ul li .fa-linkedin-in:hover {
    color: #0e76a8;
  }

  p {
    font-family: "Rubik";
    font-weight: 400;
    font-size: 15px;
    color: bisque;
    color: #15273a;
  }

  a {
    color: wheat;
    color: #15202b;
    text-decoration: none;
    font-size: 20px;
  }

  .dev-icon {
    overflow: hidden;
  }

  .dev-icon img {
    border: 10px double #ab8b80;
    transition-duration: 0.5s;
    border-radius: 50%;
    max-width: 90%;
    max-height: 50%;
  }

  .dev-icon img:hover {
    border-color: #8998ad;
  }

  .shield {
    margin: 20px 0px 0px;
  }

  .shield h1 {
    font-family: Ubuntu;
  }

  @media (max-width: 991px) {
  }

  @media (max-width: 767px) {
    .developedBy ul {
      padding: 0 15px !important;
    }
    .dev-card {
      margin-top: 20px;
    }
    .social {
      padding: 0;
    }
    .developedBy p {
      padding: 18px 18px 0px;
      font-size: 14px;
    }
    h4,
    h5 {
      font-size: 18px;
    }
    .dev-icon img {
      margin: 30px 0px;
      max-width: 100%;
    }
  }
`;
