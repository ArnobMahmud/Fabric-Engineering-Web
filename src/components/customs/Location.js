import React, { Component } from "react";
import styled from "styled-components";
import { SiMinutemailer } from "react-icons/si";
import { IconContext } from "react-icons";
import { RiUserLocationLine } from "react-icons/ri";
import { FaBlenderPhone } from "react-icons/fa";

class Location extends Component {
  render() {
    return (
      <LocationArea>
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.6384958482886!2d90.39839175067732!3d23.76026739424033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89db1b5de0f%3A0xe0e333356e676ede!2sBangladesh%20University%20of%20Textiles!5e0!3m2!1sen!2sbd!4v1624028549599!5m2!1sen!2sbd"
                className="map"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="location-details text-left align-items-center">
                <h1>Bangladesh University of Textiles (BUTex)</h1>
                <IconContext.Provider
                  style={{ alignItems: "center" }}
                  value={{
                    size: "30",
                    color: ` ${({ theme }) => theme.locationLogo}`,
                  }}
                >
                  <h5>
                    <RiUserLocationLine /> &nbsp;92 Shaheed Tajuddin Ahmed Ave,
                    Dhaka 1208
                  </h5>
                </IconContext.Provider>{" "}
                <IconContext.Provider
                  style={{ alignItems: "center" }}
                  value={{
                    size: "30",
                    color: ` ${({ theme }) => theme.locationLogo}`,
                  }}
                >
                  <h5>
                    <FaBlenderPhone /> &nbsp;+88 02 58151788
                  </h5>
                </IconContext.Provider>
                <IconContext.Provider
                  style={{ alignItems: "center" }}
                  value={{
                    size: "30",
                    color: `${({ theme }) => theme.locationLogo}`,
                  }}
                >
                  <h5>
                    <SiMinutemailer /> &nbsp; info@butex.edu.bd
                  </h5>
                </IconContext.Provider>{" "}
              </div>
            </div>
          </div>
        </div>
      </LocationArea>
    );
  }
}

export default Location;

const LocationArea = styled.div`
  background: ${({ theme }) => theme.locationBg};
  padding: 60px 0px;
  .location-details {
  }
  h1 {
    margin-bottom: 40px;
    color: ${({ theme }) => theme.locationH1};
  }
  h4,
  h5 {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.locationH5};
  }
  .map {
    width: 800px;
    height: 600px;
  }
  @media (max-width: 991px) {
    .map {
      width: 740px;
      height: 600px;
    }
    .location-details {
      margin-top: 40px;
    }
  }
  @media (max-width: 767px) {
    .map {
      width: inherit;
      height: 400px;
    }
  }
`;
