import React from "react";
import Devimg from "../../assets/developer/dvp2.jpg";
import styled from "styled-components";
import audio from "../../audio/final_ascent.mp3";

const Developer = () => {
  return (
    <>
      <DeveloperArea>
        <audio controls autoPlay="true" loop hidden>
          <source src={audio} type="audio/mp3" />
        </audio>
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
                  Full-stack Developer &amp; Flutter Application Developer.
                </p>
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
      {/* <DeveloperProject>
        <div className="container">
          <div className="card row desc">
            <div className="col-xl-2 infocard">
              <img
                src="https://user-images.githubusercontent.com/60808266/209178367-7df9d714-1446-426a-baf4-cf5fc0b451cf.png"
                alt=""
              />
              <h5>Count Converter App</h5>
            </div>
            <div className="col-xl-2 infocard">
              <img
                src="https://user-images.githubusercontent.com/60808266/128818790-a61a39a2-874b-476a-bcd1-54bd63befccd.jpg"
                alt=""
              />
              <h5>Covid'19 Tracker App</h5>
            </div>
            <div className="col-xl-2 infocard">
              <img
                src="https://user-images.githubusercontent.com/60808266/134813730-8e8a89c0-cc33-425d-9c21-1c45e48601ea.png"
                alt=""
              />
              <h5>Better Learn Programming App</h5>
            </div>

            <div className="col-xl-2 infocard">
              <img
                src="https://user-images.githubusercontent.com/60808266/112758746-b6c2de00-9011-11eb-8aff-8c00951ab69b.jpg"
                alt=""
              />
              <h5>Code Quiz App</h5>
            </div>
          </div>
        </div>
      </DeveloperProject> */}
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
    .dev-icon img {
      margin: 50px 0px;
    }
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

// const DeveloperProject = styled.div`
//   margin: 60px 0px;
//   .card {
//     padding: 30px 20px;
//     background: ${({ theme }) => theme.cardBG};
//     align-items: center;
//     height: 500px;
//   }
//   .infocard {
//     text-align: center;
//     align-items: center;
//     justify-content: space-between;
//     padding: 20px;
//     height: 400px;
//     width: 300px;
//     margin: 20px 15px;
//     border-radius: 20px;
//     background: #503439;
//     box-shadow: 2px 2px 6px #442c30, -2px -2px 20px #5c3c42;
//   }
//   h5 {
//     margin: 20px 0px 0px;
//     color: #b7acf5;
//   }
//   img {
//     border-radius: 15px;
//     max-width: 100%;
//     object-fit: fill;
//   }
//   .desc {
//     overflow-x: scroll;
//     overflow-y: hidden;
//     scroll-snap-type: x mandatory;
//   }

//   .desc::-webkit-scrollbar {
//     height: 12px;
//   }

//   .desc::-webkit-scrollbar-thumb,
//   .desc::-webkit-scrollbar-track {
//     border-radius: 92px;
//   }

//   .desc::-webkit-scrollbar-thumb {
//     background: var(--darkred);
//   }

//   .desc::-webkit-scrollbar-track {
//     background: var(--thumb);
//   }
//   @media (max-width: 991px) {
//     margin: 0px 20px 40px;
//   }
// `;
