import styled from "styled-components";

export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 94vh;
  width: 100vw;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const AboutContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const AboutTop = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom:2rem;

  h3 {
      width:100%;
    font-size: 1.6rem;
    color:white;
    text-align:center;
    text-transform:uppercase;
    margin:1rem 0;
`;

export const AboutBottom = styled.div`
  width: 100%;
  height: 83%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const AboutImgContainer = styled.div`
  height: 100%;
  width: 100%;
  &:before,
  &:after,
  & > :first-child:before,
  & > :first-child:after {
    position: absolute;
    width: 50px;
    height: 50px;
    border-color: orange; /* or whatever colour */
    border-style: solid; /* or whatever style */
    content: " ";
  }

  &:before {
    top: -4px;
    left: -4px;
    border-width: 4px 0px 0px 4px;
  }
  &:after {
    bottom: -4px;
    right: -4px;
    border-width: 0 4px 4px 0;
  }
  & > :first-child:before {
    bottom: -4px;
    right: -4px;
    border-width: 0 4px 4px 0;
  }
  & > :first-child:after {
    bottom: 0;
    left: 0;
    border-width: 0 0 0;
  }
`;
export const AboutImg = styled.img`
  background-color: white;
  display: flex;
  height: 100%;
  width: 100%;
`;

export const AboutText = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 480px) {
    justify-content: start;
  }

  h4,
  p,
   {
    width: 75%;
    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }
  h4 {
    font-weight: 900;
    font-size: 3rem;
    color: white;
    margin:1rem 0;
    
    @media screen and (max-width: 480px) {
      font-size: 1.6rem;
    }
  }
  h4 span {
    -webkit-text-fill-color: black;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
  }
  }
 
  }
  p {
    font-size: 18px;
    line-height: 1;
    @media screen and (max-width: 480px) {
        font-size: 1.6rem;
        line-height:1.2;

      }
  }


  .btn {
    margin:auto;
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
