import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiBookletLine } from "react-icons/ri";

export class Content extends Component {
  render() {
    return (
      <div>
        <ContentArea>
          <div className="container">
            <div className="row text-center">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xsm-12">
                <h2>Build a culture that drives our department forward</h2>
                <hr />
                <p>
                  We believe that a culture of creativity fosters the best in
                  our coummunity. With departmental mutual connectivity <br />
                  you can empower and inspire your on-demand classes, live class
                  lectures, customized learning paths <br />
                  and powerful, actionable insights.
                </p>
                <div className="btn">
                  <Link to="/resource">
                    Find Resources <RiBookletLine />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ContentArea>
      </div>
    );
  }
}

export default Content;

const ContentArea = styled.div`
  background: ${({ theme }) => theme.contentBG};
  padding: 90px 0px;

  h2 {
    color: ${({ theme }) => theme.contentH2};
    font-size: 30px;
  }
  hr {
    align-self: center;
    width: 15%;
    padding: 2px;
    border-radius: 5px;
    background: ${({ theme }) => theme.contentHr};
    margin: 10px auto;
  }
  p {
    font-size: 18px;
    color: ${({ theme }) => theme.contentParagraph};
    padding-top: 20px;
  }
  .btn {
    margin-top: 10px;
    padding: 10px 20px;
    border: 2px solid ${({ theme }) => theme.contentBtnBorder};
    background-color: transparent;
    border-radius: 25px;
    transition: all linear 0.3s;
  }
  .btn a {
    color: ${({ theme }) => theme.contentBtna};
  }
  .btn:hover {
    background: #0c253a;
  }
  .btn:hover a {
    color: #a89f9f;
  }
  @media (max-width: 991px) {
    h2 {
      font-size: 26px;
    }
    p {
      font-size: 12px;
    }
    hr {
      width: 20%;
    }
  }
  @media (max-width: 767px) {
    padding: 70px 20px;
    h2 {
      font-size: 24px;
    }
    hr {
      width: 25%;
    }
    p {
      font-size: 18px;
    }
  }
`;
