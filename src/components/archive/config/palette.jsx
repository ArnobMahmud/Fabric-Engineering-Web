import styled from "styled-components";

export const InfoArea = styled.div`
  margin: 200px 0px 60px;
  .content {
    text-align: left;
  }
  .card {
    margin-bottom: 30px;
  }
  h1 {
    font-size: 22px;
    color: #0c253a;
    font-family: "Josefin Sans";
  }
  h5 {
    color: ${({ theme }) => theme.resourceh5};
    font-family: "Quicksand";
  }
  p {
    color: ${({ theme }) => theme.levelTermParagraph};
    font-size: 16px;
    font-family: "Raleway";
  }
  .btn {
    margin-top: 5px;
    font-family: "Quicksand";
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
