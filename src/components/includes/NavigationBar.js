import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { GiArrowScope } from "react-icons/gi";


const NavigationBar = () => {
  return (
    <>
      <Header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <IconContext.Provider value={{ size: "25", color: "#ccffff" }}>
                <GiArrowScope />
              </IconContext.Provider>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <IconContext.Provider value={{ size: "25" }}>
                      Home
                    </IconContext.Provider>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/resource">
                    <IconContext.Provider value={{ size: "25" }}>
                      Resources
                    </IconContext.Provider>
                  </Link>
                  {/* <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="nav-link" to="/level1-term1">
                        Level 1 Term 1
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/level1-term2">
                        Level 1 Term 2
                      </Link>
                    </li>
                  </ul> */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/syllabus">
                    <IconContext.Provider value={{ size: "25" }}>
                      Syllabus
                    </IconContext.Provider>
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0 mr-auto list-unstyled  justify-content-between">
                <li className="nav-item">
                  <Link className="nav-link" to="/accessories">
                    <IconContext.Provider value={{ size: "25" }}>
                      Accessories
                    </IconContext.Provider>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/studentscorner">
                    <IconContext.Provider value={{ size: "25" }}>
                      Archives
                    </IconContext.Provider>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <IconContext.Provider value={{ size: "25" }}>
                      Production
                    </IconContext.Provider>
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li className="nav-item">
                      <Link className="nav-link" to="/covid19updates">
                        <IconContext.Provider value={{ size: "25" }}>
                          Covid Update
                        </IconContext.Provider>
                      </Link>
                    </li>{" "}
                    <li className="nav-item">
                      <Link className="nav-link" to="/developer">
                        <IconContext.Provider value={{ size: "25" }}>
                          Developer
                        </IconContext.Provider>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <Link className="navbar-brand" to="/" exact>
              <img className="navBrand" src={Logo} alt="" srcSet />
            </Link>
          </div>
        </nav>
      </Header>
    </>
  );
};

export default NavigationBar;

const Header = styled.div`
  background: #202428;
  padding: 25px 0px;
  position: fixed;
  top: 0px;
  right: 0;
  width: 100%;
  z-index: 99;

  .navbar-brand {
    margin-right: 0 !important;
    right: 50%;
    transform: translate(50%, -35px);
    top: 10%;
    position: absolute;
    height: 180px; /* 185*/
    width: 170px;
    background: #202428;
    border-radius: 50%;
    /* box-shadow: 3px 3px 14px 3px #00000061; */
  }

  .navbar-brand img {
    max-width: 140px; /*145*/
    position: absolute;
    transform: translate(13%, 10%);
  }

  .nav-item {
    padding: 0px 10px;
  }

  .nav-item a {
    font-weight: 400;
    font-size: 18px;
    color: rgb(255, 255, 255);
  }

  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
    text-align: center;
    background: #202428;
    font-family: inherit;
    border: none;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown-item.active {
    -webkit-transition: all linear 0.3s;
    transition: all linear 0.3s;
    color: wheat;
    text-decoration: none;
    background-color: #202428;
  }

  .dropdown-item {
    -webkit-transition: all linear 0.3s;
    transition: all linear 0.3s;
  }

  .dropdown-item:hover {
    color: wheat;
    text-decoration: none;
    background: ${({ theme }) => theme.headerBG};
  }

  .nav-link {
    border-bottom: 2px solid transparent;
    -webkit-transition: all linear 0.3s;
    transition: all linear 0.3s;
  }

  .nav-link:hover {
    cursor: pointer;
    color: #c5d7bd;
    border-bottom: 2px solid #8d6a6a;
  }

  .navBrand {
    backface-visibility: hidden;
    transform: translateZ(0) scale(1, 1);
  }

  @media all and (min-width: 992px) {
    .navbar .nav-item .dropdown-menu {
      display: none;
    }
    .navbar .nav-item:hover .dropdown-menu {
      display: block;
    }
    .navbar .nav-item .dropdown-menu {
      margin-top: 0;
    }
  }

  @media (max-width: 767px) {
    .navbar-expand-lg .navbar-nav .dropdown-menu {
      position: absolute;
      text-align: center;
      background: ${({ theme }) => theme.headerBG};
    }
    @media (max-width: 767px) {
      .logo {
        width: 100%;
      }
      .logo img {
        width: 30%;
        margin: auto;
      }
      .header-title {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 30px;
      }
      .navbar-brand {
        top: 0;
      }
    }
  }
`;
