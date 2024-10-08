import React from "react";
import Devimg from "../../assets/developer/dvp2.jpg";
import styled from "styled-components";
// import nodeimg from "../../assets/tech/nodejs.png";
// import npmimg from "../../assets/tech/npm.png";
// import express from "../../assets/tech/express.png";
// import reactjs from "../../assets/tech/reactjs.png";
// import mongo from "../../assets/tech/mongo.png";

const Developer = () => {
  return (
    <>
      <DeveloperArea>
        <div className="container">
          <div className="row justify-content-around align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 text-center">
              <div className="dev-icon">
                <img src={Devimg} alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 col-sm-12 text-center dev-card"
              data-aos="fade-up"
              data-aos-duration={3000}
            >
              <div className="card">
                <h1>Arnob Mahmud</h1>
                <p>Full-stack Developer &amp; Flutter Application Developer.</p>
                <h5>Contact</h5>
                <div className="row justify-content-start">
                  <div className="social col-lg-12 col-md-12 col-sm-12">
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
                          href="http://www.instagram.com/arnob___mahmud"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i class="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="http://www.twitter.com/arnobmahmudamd"
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
                <h3>
                  Env. Status <span className="status"></span>
                </h3>
                <div className="row text-left shield">
                  {/* Netlify */}
                  <div className="col-lg-5 col-md-6 col-sm-6">
                    <a
                      className="foot-link"
                      href="https://fabricengineering.netlify.app/developer"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://api.netlify.com/api/v1/badges/944bd3d0-a153-41b9-9da2-5ebd88a18994/deploy-status"
                        alt="cq"
                      />
                    </a>
                  </div>

                  {/* License */}
                  <div className="col-lg-5 col-md-6 col-sm-6">
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

                  {/* Deploy */}
                  <div className="col-lg-5 col-md-6 col-sm-6">
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
                  {/* npm */}
                  <div className="col-lg-5 col-md-6 col-sm-6">
                    <a
                      className="foot-link"
                      href="https://fabricengineering.netlify.app/developer"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://img.shields.io/npm/v/npm?style=plastic&logo=npm"
                        alt="cq"
                      />
                    </a>
                  </div>
                  {/* wakatime */}
                  <div className="col-lg-5 col-md-6 col-sm-6">
                    <a
                      className="foot-link"
                      href="https://fabricengineering.netlify.app/developer"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://wakatime.com/badge/github/ArnobMahmud/Fabric-Engineering-Web.svg?style=plastic&labelColor=beb4ab"
                        alt="cq"
                      />
                    </a>
                  </div>

                  {/* Develop */}
                  <div className="col-lg-5 col-md-6 col-sm-6">
                    <a
                      className="foot-link"
                      href="https://fabricengineering.netlify.app/developer"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://img.shields.io/badge/Developed%20by-Arnob%20Mahmud-1f425f.svg?style=plastic&logo=visual-studio-code&logoColor=007ACC&labelColor=beb4ab"
                        alt="cq"
                      />
                    </a>
                  </div>
                  {/* Resource */}
                  <div className="col-lg-5 col-md-6 col-sm-6">
                    <a
                      className="foot-link"
                      href="https://fabric-web-backend-server.onrender.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://img.shields.io/website?url=https%3A%2F%2Ffabricengineering.netlify.app%2Fresource&up_message=online&up_color=orange&down_message=offline&down_color=lightgrey&style=plastic&logo=dependabot&logoColor=green&label=Resource"
                        alt="cq"
                      />
                    </a>
                  </div>
                  {/* node */}
                  <div className="col-lg-5 col-md-6 col-sm-6">
                    <a
                      className="foot-link"
                      href="https://fabricengineering.netlify.app/developer"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://img.shields.io/badge/Made%20with-NodeJs-1f425f.svg?style=plastic&logo=Node.Js&color=e1d1eb&logoColor=faed3e&labelColor=339936"
                        alt="cq"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-xl-12 col-md-12 col-sm-12">
            <div className="card tech text-center">
              <h1>Technologies</h1>
              <img src={npmimg} alt="imgData" />
              <img src={mongo} alt="imgData" />
              <img src={express} alt="imgData" />
              <img src={reactjs} alt="imgData" />
              <img src={nodeimg} alt="imgData" />
            </div>
          </div> */}
        </div>
      </DeveloperArea>
    </>
  );
};

export default Developer;

const DeveloperArea = styled.div`
  margin: 200px 0px 60px;
  .card {
    padding: 30px 20px;
    background: ${({ theme }) => theme.cardBG};
    align-items: center;
  }
  h1 {
    font-family: "Josefin Sans";
    font-size: 36px;
    color: ${({ theme }) => theme.devTitleColor};
  }
  h3 {
    font-family: "Josefin Sans";
    color: ${({ theme }) => theme.codeAnalysis};
  }
  h5 {
    color: ${({ theme }) => theme.devh5};
    font-family: "Josefin Sans";
  }
  ul {
    display: inline-block;
    padding: 0px 15px;
  }
  ul li a i {
    -webkit-transition: all linear 0.3s;
    transition: all linear 0.3s;
    font-size: 30px;
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
  ul li .fa-instagram:hover {
    color: #833ab4;
    list-style: none;
  }
  ul li .fa-github:hover {
    opacity: 0.5;
  }
  ul li .fa-instagram:hover {
    opacity: 0.5;
  }
  ul li .fa-discord:hover {
    color: #7289d9;
  }

  ul li .fa-linkedin-in:hover {
    color: #0e76a8;
  }

  p {
    font-family: "Raleway";
    font-weight: 500;
    font-size: 17px;
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
    border: 5px solid #0e172e;
    transition-duration: 0.5s;
    border-radius: 20px;
    max-width: 90%;
    max-height: 50%;
  }

  .shield {
    margin: 20px 0px 0px;
    justify-content: space-around;
  }

  .shield h1 {
    font-family: Ubuntu;
  }

  h3 span.status {
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #21ad3f;
    box-shadow: 0px 0px 40px 14px #39d353;
  }

  .tech {
    display: block;
  }

  .tech img {
    align-items: center;
    max-width: 10%;
    margin: 20px;
  }

  .shield {
    text-align: left;
  }

  @media (max-width: 991px) {
    .dev-icon img {
      margin: 50px 0px;
    }

    .tech {
      display: flex;
    }

    .tech img {
      max-width: 30%;
    }
  }

  @media (max-width: 767px) {
    margin: 180px 0px 60px;
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
