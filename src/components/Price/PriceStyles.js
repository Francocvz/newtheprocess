import styled from "styled-components";

export const PriceSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 2rem;
`;

export const PriceContainer = styled.div`
  width: 80%;
  height: 90%;
`;

export const PriceTop = styled.div`
  height: 5%;
  font-size: 1.6rem;
  color: white;
  height: 5%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
`;

export const PriceBottom = styled.div`
display: flex;
height: 85%;
flex-direction: column;

.item {
  flex: 1;
  transition: flex 1s ease;
  overflow: hidden;

  &:hover {
    flex: 51%;

    .textContainer{
        opacity:1;
        height:auto;
    }

    .btn {
        opacity:1;
        transition: all 0.5s 0.4s linear;
    }

`;
export const PriceCards = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  border: solid 1px rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  .cards-top {
    width: 80%;
    height: auto;
  }
  .case1 {
    .un {
      background-color: orange;
    }
  }
  .case2 {
    .un,
    .deux {
      background-color: orange;
    }
  }
  .case3 {
    .un,
    .deux,
    .trois {
      background-color: orange;
    }
  }

  .textContainer {
    hight: 0;
    overflow: hidden;
    opacity: 0;
    width: 80%;
    transition: all 0.3s linear;
  }
  .btn {
    margin: auto;
    line-height: 50px;
    height: 50px;
    text-align: center;
    width: 80%;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: bold;
    opacity: 0;
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
    background-color: rgba(255, 255, 255, 0.2);
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

export const Number = styled.div`
  height: ;
  overflow: hidden;
  width: 80%;
  margin: 2rem 0;

  h4 {
    // background-color: rgba(255, 255, 255, 0.2);
    width: auto;
    font-size: 2.1rem;
    font-weight: 900;
    text-transform: uppercase;
  }
  .container {
    display: flex;
    width: 20%;
    justify-content: space-around;
  }
  div .un,
  .deux,
  .trois {
    height: 15px;
    width: 15px;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const CardsPrice = styled.div`
  height: auto;
  width: 80%;
  font-weight: 700;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  h5 {
    font-size: 4rem;
    margin-bottom: 0.5rem;
    height: auto;
  }
  p {
    font-size: 1.4rem;
    color: rgb(255, 255, 255, 0.7);
  }
`;

export const Duration = styled.div`
  height: auto;
  width: auto;
  font-size: 1.8rem;
`;

export const Type = styled.div`
  height: auto;
  width: auto;
  font-size: 1.8rem;
  display: flex;
  margin-bottom: 1rem;
  .check {
    width: 2rem;
    background-color: orange;
    border-radius: 50%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-right: 0.5rem;
    img {
      height: auto;
      width: 70%;
    }
  }
`;
