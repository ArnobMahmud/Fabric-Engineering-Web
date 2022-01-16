import styled from "styled-components";

export const ResourceArea = styled.div`
  margin: 200px 0px 60px;
  .content {
    text-align: left;
  }
  .card {
    margin-bottom: 30px;
  }
  h1 {
    font-size: 30px;
    color: #0c253a;
  }
  h5 {
    color: ${({ theme }) => theme.resourceh5};
  }
  p {
    color: ${({ theme }) => theme.levelTermParagraph};
    font-size: 22px;
  }
  .btn {
    margin-top: 5px;
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
    @media (max-width: 767px) {
      .card {
        margin-bottom: 25px;
        align-items: unset;
      }
    }
  }
`;
