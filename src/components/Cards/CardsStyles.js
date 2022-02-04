import styled from "styled-components";

export const CardsSection = styled.div`
  height: 100vh;
  width: 80%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
`;

export const CardsContainer = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    height: 100%;
    width: 100%;
  }
`;

export const CardsTop = styled.div`
  height: 5%;
  width: 100%;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: orange;
  margin-bottom: 2rem;

  h4 {
    color: rgba(255, 255, 255);
    width: 80%;
    font-size: 2.1rem;
    font-weight: bold;
    text-align: center;

    @media screen and (max-width: 480px) {
      font-size: 1.6rem;
      font-weight: 700;
    }
  }
  h2 {
    font-size: 3rem;
    font-weight: 900;
    color: white;
    @media screen and (max-width: 480px) {
      font-size: 2rem;
    }
  }

  h2 span {
    -webkit-text-fill-color: black;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
  }
`;

export const CardsBottom = styled.div`
  display: flex;
  height: 90%;
  flex-direction: row;

  .item {
    flex: 1;
    transition: flex 1s ease;
    overflow: hidden;

    &:hover {
      flex: 100%;

      .text-bottom  , .text-top {
        opacity: 1;
        height: 100%;
        transition: all 0.5s ease-in;
		.invisible {
			opacity:1;
			height:100%;
			transition: all 1s linear;
		}
		
		}
		}
		
      }
    }
  }
`;

export const CardsSchema = styled.div`
  height: 100%;
  margin: 0 0rem;
  overflowy: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  filter: grayscale(100%);
  transition: all 0.4s ease;

  &:hover {
    filter: grayscale(0%);
    margin: 0 0;
  }

  .img {
    position: relative;
    display: flex;
    flex-direction: column;
    // width: auto%;
    height: 80%;
  }
  .bottom-right {
    background-color: white;
    &:hover {
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
        top: -3px;
        right: -3px;
        border-width: 4px 4px 0px 0px;
      }
      &:after {
        top: 0;
        right: 0;
        border-width: 0px 0px 0 0;
      }
    }
  }
  .top-left {
    &:hover {
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
        top: -3px;
        left: -3px;
        border-width: 4px 0 0 4px;
      }
      &:after {
        bottom: -3px;
        right: -3px;
        border-width: 0px 0px 0px 0px;
      }
    }
  }

  .top-right {
    &:hover {
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
        top: 0px;
        left: 0px;
        border-width: 0px 0 0 0px;
      }
      &:after {
        top: -3px;
        right: -3px;
        border-width: 4px 4px 0px 0px;
      }
    }
  }

  .text-bottom {
    transition: all 0.5s ease-in;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
    height: 20%;
    font-weight: 900;
    line-height: 1;
    opacity: 1;
    position: relative;

    .invisible {
      opacity: 0;
      transition: all 0.8s linear;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 0;
      p {
        font-size: 1.8rem;
      }
    }

    h2 {
      font-weight: 900;
      font-size: 6rem;
      transition: flex 0.8s ease;
      position: absolute;
      bottom: 0;
    }
    p {
      font-size: 2.1rem;
      font-weight: 900;
    }
  }

  .text-top {
    display: flex;
    flex-direction: column;
    position: relative;
    width: auto;
    height: 31%;
    font-weight: 900;
    opacity: 1;
    text-align: center;
    @media screen and (max-width: 480px) {
      top: 0px;
      height: 31%;
    }
    .invisible {
      opacity: 0;
      transition: all 0.8s linear;
      height: 0;
      p {
        font-size: 1.8rem;
        transition: all 0.8s linear;
      }
    }
    h2 {
      position: absolute;
      top: -20px;
      height: auto;
      font-weight: 900;
      font-size: 6rem;
      transition: flex 0.8s ease;
    }
    p {
      font-size: 2.1rem;

      background-color: red;
      transition: all 1s linear;
      font-weight: 900;
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: 0;
    }
  }

  .text-bottom h2,
  .text-top h2 {
    font-size: 5rem;

    -webkit-text-fill-color: black;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    overflow: hidden;
    @media screen and (max-width: 480px) {
      font-size: 8rem;
      font-weight: 900;
    }
  }
  p {
    font-size: 2rem;
    color: #fff;
    @media screen and (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
`;
export const CardsImg = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  background-repeat: none;
`;
