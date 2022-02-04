import styled from "styled-components";

export const Hbg = styled.div`
  height: 20px;
  width: 30px;

  .hbg-container {
    height: 20px;
    width: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    align-items: center;

    div {
      height: 3px;
      width: 100%;
      background-color: white;
      border-radius: 10px;
      transform-origin: 5.5px;
      transition: 0.5s ease;
    }
  }

  .open {
    .burger1 {
      transform: rotate(45deg);
    }
    .burger2 {
      transform: translateX(80%);
      opacity: 0;
    }
    .burger3 {
      transform: rotate(-45deg);
    }
  }
`;
