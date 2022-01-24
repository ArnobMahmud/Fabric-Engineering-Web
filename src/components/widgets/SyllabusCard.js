import React from "react";
import { Component } from "react";
import data from "../../json/syllabus-data.json";
import styled from "styled-components";
import InformationScreen from "../screens/InformationScreen";

class Syllabus extends Component {
  render() {
    return (
      <div>
        <SyllabusArea>
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="sylb col-lg-9 col-md-12 col-sm-12">
                <div className=" card">
                  <table>
                    <tr>
                      <td>
                        <h2>Level-Term</h2>
                      </td>
                      <td>
                        <h2>Syllabus</h2>
                      </td>
                    </tr>
                    <tbody>
                      {data.map((row) => (
                        <tr key={row.key}>
                          <td>
                            <h5>{row.levelterm}</h5>
                          </td>
                          <td>
                            <div className="btn">
                              <a
                                href={
                                  row.driveLink === 501 ? (
                                    <InformationScreen />
                                  ) : (
                                    row.driveLink
                                  )
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </SyllabusArea>
      </div>
    );
  }
}

export default Syllabus;

const SyllabusArea = styled.div`
  padding: 200px 0px 60px;
  .btn {
    margin: 5px 0px;
    border: 2px solid #093d68;
    padding: 10px 50px;
  }
  .btn a {
    color: #093d68;
  }

  .btn:hover {
    background-color: #093d68;
    border: 2px solid transparent;
  }

  .btn:hover a {
    color: #a89f9f;
  }

  table tr {
    display: -ms-flexbox;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 25px;
  }

  table tr td {
    padding: 20px 5px;
    width: 50%;
    padding: 10px 0px;
    height: auto;
  }

  h5 {
    color: ${({ theme }) => theme.h5};
  }

  .card {
    background: ${({ theme }) => theme.cardBg};
    align-items: stretch;
    padding: 30px;
  }

  @media (max-width: 767px) {
    table tr td:first-child,
    table tr td:nth-child(2) {
      width: 50% !important;
    }

    table tr td:first-child,
    table tr td:nth-child(2) {
      width: 50% !important;
    }

    h2 {
      font-size: 26px;
      font-weight: 400;
    }
    h5 {
      font-size: 18px;
    }
    .btn {
      padding: auto;
    }
  }

  @media (max-width: 599px) {
    .card {
      align-items: center;
      padding: 30px;
    }
  }
`;
