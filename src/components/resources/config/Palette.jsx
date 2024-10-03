import styled from "styled-components";

export const CourseArea = styled.div`
  margin: 200px 0px 40px;
  .card {
    background: ${({ theme }) => theme.cardBG};
    align-items: center;
  }
  .section-title {
    width: 100%;
  }

  .section-title h1 {
    font-weight: 900;
    color: #15202bd1;
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 40px;
    font-family: "Josefin Sans";
  }
  input {
    background: transparent;
    color: #0c253a;
    width: 60%;
    padding: 10px 30px;
    font-size: 14px;
    border: 2px solid #3c493c !important;
    border-radius: 50px;
    margin-bottom: 25px;
    font-family: "Raleway";
  }
  input::placeholder {
    color: #0c253a;
    font-size: 14px;
  }
  input:focus-visible {
    outline: none;
  }

  table {
    width: 100%;
  }

  table tr th {
    color: #0f253b;
    font-size: 18px;
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
    font-size: 16px;
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
    font-size: 14px;
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
    input {
      background: transparent;
      color: #0c253a;
      width: 90%;
      padding: 10px 20px;
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

export const ResourceTree = styled.div`
  h1 {
    font-size: 22px;
    color: #0c253a;
    font-family: "Josefin Sans";
  }
  h5 {
    font-size: 18px;
    color: ${({ theme }) => theme.resourceh5};
    font-family: "Raleway";
  }
  p {
    color: ${({ theme }) => theme.levelTermParagraph};
    font-size: 16px;
    font-family: "Raleway";
  }
  .content {
    text-align: left;
  }
  .card {
    margin-bottom: 30px;
  }
  .btn {
    margin-top: 5px;
  }
  .btn a {
    font-size: 14px;
  }
  @media (max-width: 767px) {
    .card {
      margin-bottom: 25px;
      align-items: unset;
    }
  }
`;

export const ResourceArea = styled.div`
  margin: 200px 0px 60px;
`;
