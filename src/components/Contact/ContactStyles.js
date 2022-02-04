import styled from "styled-components";

export const ContactSection = styled.div`
  min-height: 100vh;
  width: 80vw;

  display: flex;
  margin: 1rem auto;
`;

export const ContactContainer = styled.div`
  height: 90%;
  width: 100%;
`;

export const ContactTop = styled.div`
  width: 100%;
  min-height: 20%;
  font-size: 1.6rem;
  color: white;
  margin-bottom: 5rem;
`;

export const ContactTitle = styled.div`
  width: 100%;
  height: 35%;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const ContactCardsContainer = styled.div`
  min-height: 55%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactCards = styled.div`
  min-height: 80%;
  width: 48.5%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h5 {
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 900;
    color: white;
  }
`;

export const ContactCardsIcon = styled.div`
  height: 5%;
  width: 20%;
`;
export const ContactBottom = styled.div`
  width: 100%;
  height: 75%;
  color: white;
`;
