import styled from "styled-components";

export const CourseArea = styled.div`
  margin: 200px 0px 40px;

  .card {
    background: ${({ theme }) => theme.cardBG};
    align-items: center;
  }
  .section-title {
    width: 100%;
    font-size: 48px;
  }

  .section-title h1 {
    font-weight: 900;
    color: #15202bd1;
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 40px;
    font-family: "Josefin Sans";
  }
  input {
    background: transparent;
    color: #0c253a;
    width: 60%;
    padding: 10px 30px;
    font-size: 18px;
    border: 2px solid #3c493c !important;
    border-radius: 50px;
    margin-bottom: 25px;
    font-family: "Raleway";
  }
  input::placeholder {
    color: #0c253a;
  }
  input:focus-visible {
    outline: none;
  }

  table {
    width: 100%;
  }

  table tr th {
    color: #0f253b;
    font-size: 20px;
    font-weight: 500;
    padding: 10px;
    font-family: "Quicksand";
  }
  table tr td {
    font-family: "Raleway";
    color: #0b0b0b;
    padding: 10px;
    border-style: none;
    font-weight: 400;
    height: auto;
    border-color: #fdfdfd61;
  }

  table tr td:nth-child(3) {
    font-size: 15px;
  }
  .link a {
    width: 100%;
    text-decoration: none;
    background: #0c253a;
    color: #e9dddd;
    padding: 10px 5px;
    border: 2px solid transparent;
    border-radius: 30px;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    display: inline-block;
  }

  .link a:hover {
    background-color: transparent;
    border: 2px solid #0c253a;
    color: #0c253a;
  }

  @media (max-width: 991px) {
    table tr {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      border-bottom: 1px groove rgb(184 105 105 / 45%);
      padding: 25px;
    }
    table tr td {
      padding: 20px 5px;
      width: 33.33%;
    }
    table tr td:nth-child(4) {
      width: 100% !important;
    }
    table tr th {
      padding: 10px 5px;
      width: 33.33%;
    }
    table tr th:nth-child(4) {
      width: 100% !important;
    }
    table tr th:nth-child(5) {
      width: 100%;
    }
  }
  @media (max-width: 767px) {
    padding: 0px 10px 0px !important;
    .card {
      text-align: center;
      align-items: center;
      padding: 30px 0px;
    }
    .section-title h1 {
      font-size: 30px !important;
      font-size: 20px;
    }
    input {
      background: transparent;
      color: #0c253a;
      width: 90%;
      padding: 10px 20px;
      font-size: 16px;
      border: 2px solid #3c493c !important;
      border-radius: 50px;
      margin-bottom: 20px;
    }
    table tr th:first-child,
    table tr th:nth-child(2) {
      width: 50% !important;
    }
    table tr th {
      font-size: 16px !important;
      padding: 10px 5px;
      width: 100%;
      font-size: 12px;
    }
    table tr td {
      width: 100%;
    }
    table tr td:first-child,
    table tr td:nth-child(2) {
      width: 50% !important;
    }
    table tr td:nth-child(3),
    table tr td:nth-child(4) {
      width: 100% !important;
    }
    table tr td {
      padding: 15px 5px;
    }
  }
`;

export const OverlayButton = styled.div`
  display: flex;
  justify-content: flex-end;

  .fa-arrow-circle-down,
  .fa-arrow-circle-up {
    color: ${({ theme }) => theme.overlayBtnIcon};
  }

  a {
    background: ${({ theme }) => theme.overlayBtnBg};
    display: inline-block;
    text-decoration: none;
    padding: 13px 18px;
    border-radius: 100px;
    transition-duration: 0.3s;
    font-family: Ubuntu;
    font-weight: 500;
    box-shadow: 2px 2px 3px ${({ theme }) => theme.overlayBtnBoxShd};
  }

  a i {
    color: #4285f4;
  }

  a span {
    padding-left: 2px;
    display: inline-block;
  }
  a i,
  a span {
    font-size: 15px !important;
  }
`;

export const ScreenArea = styled.div`
  padding: 200px 0px 50px;
  img {
    max-width: 100%;
    /* animation: rotating 1s infinite; */
  }
  .effect1 {
    animation: updown 5s infinite;
  }
  .effect2 {
    animation: zoominoutsinglefeatured 3s infinite;
  }
  @keyframes updown {
    0% {
      transform: translateY(-5%);
    }

    50% {
      transform: translateY(5%);
    }

    100% {
      transform: translateY(-5%);
    }
  }
  @keyframes zoominoutsinglefeatured {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.2, 1.2);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  .content {
    text-align: left;
  }
  h1 {
    font-size: 34px;
    color: brown;
  }
  p {
    color: #010101;
    font-size: 20px;
  }
  @media (max-width: 991px) {
    h1 {
      font-size: 25px;
    }

    p {
      font-size: 16px;
    }
  }
  @media (max-width: 767px) {
    padding: 180px 20px 50px;
    h1 {
      font-size: 28px;
    }
    .content {
      margin-top: 30px;
    }
  }
`;

export const InfoArea = styled.div`
  margin: 60px 0px;
  .content {
    text-align: left !important;
  }
  h1 {
    color: #0c253a;
  }
  h4 {
    color: ${({ theme }) => theme.h4};
  }
  p {
    color: #093d68;
    font-size: 22px;
  }
  @media (max-width: 991px) {
    h1 {
      font-size: 26px;
    }
    h4 {
      font-size: 20px;
    }
    p {
      font-size: 18px;
    }
  }
`;
