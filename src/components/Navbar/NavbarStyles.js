import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: tranparent;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  z-index: 99;
  width: 100%;
  position: absolute;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100px;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  height: 100%;
  width: 500px;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  z-index: 99;
  img {
    height: 45%;
    width: auto;
    margin-right: 0.8rem;
  }

  p {
    font-weight: bold;
  }
`;

export const NavIcon = styled.img`
  margin-right: 0.2rem;
  width: 3rem;
`;

export const MobileIcon = styled.div`
  z-index: 99;
  display: none;
  @media screen and (max-width: 480px) {
    display: flex;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100%;
  background: black;
  flex-direction: column;
  width: ${({ show }) => (show ? "100%" : "0")};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 100%;
  transition: all 0.5s ease;
  overflow: hidden;
  transform: ${({ show }) => (show ? "translateX(-100%)" : "")};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
}

  @media screen and (max-width: 480px) {
  //   flex-direction: column;
  //   width: ${({ show }) => (show ? "100%" : "0")};
  //   height: 100vh;
  //   position: fixed;
  //   top: 0;
  //   left: 100%;
  //   transition: all 0.5s ease;
  //   overflow: hidden;
  //   transform: ${({ show }) => (show ? "translateX(-100%)" : "")};
  //   visibility: ${({ show }) => (show ? "visible" : "hidden")};
  // }
`;

export const TextContainer = styled.div`
  width: auto;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.div`
  position: absolute;
  left: 0%;
  width:100%;
  overflow:hidden;
  opacity: ${({ show }) => (show ? 1 : 0)};
  position: relative;
  -webkit-text-stroke: 0.3vw white;
  font-weight: 900;
  font-size: 14vw;
  color: black;
  transition: all 0.4s ease;

  &:hover {
    font-size: 16vw;
  }
  &:before {
    content: "${(props) => props.test}";
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    width: 0%;
    height: 100%;
    -webkit-text-stroke: 0.3vw white;
    overflow: hidden;
    transition: all 0.4s ease;
  }
  &:hover:before {
    width: ${({ show }) => (show ? "100%" : "0")};
    font-size: 16vw;
    width 0.5s 1s linear
  }
`;
export const NavItem = styled.li`
  height: 8rem;
  cursor: pointer;
  color: black;

  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-size: 4rem;
  font-weight: 900;
  text-align: center;
  &:hover {
    color: orange;
  }
`;
