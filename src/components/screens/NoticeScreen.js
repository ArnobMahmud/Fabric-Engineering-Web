import React, { Component } from "react";
import { ScreenArea } from "../config/Palette";
import NoticeCard from "../widgets/NoticeCard";
import styled from "styled-components";

export class NoticeScreen extends Component {
  render() {
    return (
      <div>
        <ScreenArea>
          <Notice>
            <div className="container">
              <NoticeCard
                title="Level 1 - Term 1 Routine"
                mcq="MCQ Time :"
                written="Written Time : "
                imgPath=""
              />
            </div>
          </Notice>
        </ScreenArea>
      </div>
    );
  }
}

export default NoticeScreen;

const Notice = styled.div`
  .card {
    padding: 30px;
    margin-bottom: 30px;
  }
  .noticeImg {
    max-width: 100%;
    border-radius: 15px;
  }
  p {
    font-size: 22px;
    color: #093d68;
  }
  @media (max-width: 991px) {
  }
  @media (max-width: 767px) {
    h1 {
      font-size: 22px;
    }
    p {
      font-size: 16px;
    }
  }
`;
