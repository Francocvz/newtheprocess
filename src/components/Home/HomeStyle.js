import styled from "styled-components";

export const HomeSection = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(./images/home4.jpg) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const HomeTitle = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  * {
    margin-bottom: 1.8rem;
    overflow: hidden;
  }

  .black {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
  }

  h1 {
    font-size: 4rem;
    font-weight: 900;
    line-height: 1;
    color: white;
  }
  p {
    width: 60%;
    color: rgba(255, 255, 255, 0.7);
  }

  .btn {
    line-height: 50px;
    height: 50px;
    text-align: center;
    width: 14.4rem;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: bold;
  }

  .btn-three {
    color: #fff;
    transition: all 0.5s;
    position: relative;
  }
  .btn-three::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
  }
  .btn-three:hover::before {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }
  .btn-three::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid white;
    transform: scale(1.2, 1.2);
  }
  .btn-three:hover::after {
    opacity: 1;
    transform: scale(0.9, 0.9);
  }
`;
