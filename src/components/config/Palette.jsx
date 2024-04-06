import styled from "styled-components";

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
