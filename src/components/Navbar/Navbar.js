import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtnLink,
  Text,
  TextContainer,
} from "./NavbarStyles";
import { navbarData } from "../../data/NavbarData";
import Hamburger from "../Hamburger/Hamburger";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeMobileMenu = (id) => {
    scrollTo(id);

    setShow(false);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <img src="./images/dumbell.svg" alt="" />
          <p style={{ color: "white" }}>THE PROCESS</p>
        </NavLogo>
        <MobileIcon onClick={() => setShow(!show)}>
          <Hamburger click={!show} />
        </MobileIcon>
        <NavMenu show={show}>
          <TextContainer show={show}>
            <Text show={show} test="ACCEUIL">
              ACCEUIL
            </Text>
          </TextContainer>
          <TextContainer show={show}>
            <Text show={show} test="COACH">
              COACH
            </Text>
          </TextContainer>

          <TextContainer show={show}>
            <Text show={show} test="SEANCES">
              SEANCES
            </Text>
          </TextContainer>
          <TextContainer show={show}>
            <Text show={show} test="TARIFS">
              TARIFS
            </Text>
          </TextContainer>
          <TextContainer show={show}>
            <Text show={show} test="CONTACT">
              CONTACT
            </Text>
          </TextContainer>
          {/* {navbarData.map((el, index) => (
            <NavItem key={index}>
              <NavLinks to="/" onClick={() => closeMobileMenu(el.to)}>
                {el.text}
              </NavLinks>
            </NavItem>
          ))} */}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
