import styled from "styled-components";

export const SafeArea = styled.div`
  margin: 170px 0px 40px;
  .card {
    background: ${({ theme }) => theme.cardBG};
    align-items: center;
    margin: 30px 0px 30px;
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

  .section-title h1 {
    color: #0f253b;
    font-size: 22px;
    font-weight: 900;
    margin-bottom: 20px;
    font-family: "Josefin Sans";
  }

  table {
    width: 100%;
  }

  table tr th {
    color: #3c0a34;
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
    height: auto;
    border-color: #fdfdfd61;
    font-size: 16px;
    font-weight: 400;
    width: 25%;
  }

  table tr td img {
    border-radius: 50%;
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
      border-bottom: 1px groove rgb(8 7 27 / 41%);
      padding: 20px;
    }
    table tr th {
      width: 50%;
    }
    table tr th:first-child,
    table tr th:nth-child(2) {
      width: 50% !important;
    }
    table tr th:nth-child(3),
    table tr th:nth-child(4) {
      width: 100% !important;
    }

    table tr td {
      width: 50%;
    }
    table tr td:first-child,
    table tr td:nth-child(2) {
      width: 50% !important;
    }
    table tr td:nth-child(3),
    table tr td:nth-child(4) {
      width: 100% !important;
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
  }
`;

export const LabInfoArea = styled.div`
  margin: 200px 0px 40px;

  .card {
    background: ${({ theme }) => theme.cardBG};
    align-items: center;
    margin: 30px 0px 30px;
  }
  .section-title {
    width: 100%;
    font-size: 48px;
  }

  .section-title h1 {
    font-weight: 700;
    color: #15202bd1;
    font-size: 30px;
    margin-bottom: 40px;
    font-family: "Josefin Sans";
  }

  table {
    width: 100%;
  }

  table tr th {
    color: #3c0a34;
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
    font-weight: 400;
    width: 20%;
  }
  table tr td img {
    border-radius: 50%;
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
      padding: 25px;
    }
    table tr td {
      padding: 20px 5px;
      width: 33.33%;
    }
    table tr th:first-child {
      width: 100%;
    }
    table tr th:nth-child(2),
    table tr th:nth-child(3),
    table tr th:nth-child(4),
    table tr th:nth-child(5) {
      width: 50% !important;
    }
    table tr td:first-child {
      width: 100%;
    }
    table tr td:nth-child(2),
    table tr td:nth-child(3),
    table tr td:nth-child(4),
    table tr td:nth-child(5) {
      width: 50% !important;
    }
  }
  @media (max-width: 767px) {
    padding: 0px 10px 0px !important;
    .card {
      text-align: center;
      align-items: center;
      padding: 30px 0px;
    }

    table tr th:first-child {
      width: 100%;
    }
    table tr th:nth-child(2),
    table tr th:nth-child(3),
    table tr th:nth-child(4),
    table tr th:nth-child(5) {
      width: 50% !important;
    }
    table tr td:first-child {
      width: 100%;
    }
    table tr td:nth-child(2),
    table tr td:nth-child(3) {
      width: 50% !important;
    }
    table tr th {
      font-size: 16px !important;
      width: 100%;
    }
  }
`;
