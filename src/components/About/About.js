import Marquee from "../Marquee/Marquee";
import {
  AboutBottom,
  AboutContainer,
  AboutImg,
  AboutImgContainer,
  AboutSection,
  AboutText,
  AboutTop,
} from "./AboutStyles";

const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <Marquee title={"COACH"} />
        <AboutTop>
          <h3>Entraine toi avec un coach experimente</h3>
        </AboutTop>
        <AboutBottom>
          <AboutImgContainer>
            <AboutImg src={`./images/about.png`}></AboutImg>
          </AboutImgContainer>
          <AboutText>
            <h4>
              TOM <span>SPECALIN</span>
            </h4>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque nemo possimus impedit omnis libero corrupti, reiciendis
              necessitatibus dolores quod neque, vitae fuga. Iusto aperiam enim
              libero error illo laboriosam nesciunt, facilis quae iure unde amet
              quos mollitia ut velit provident!
            </p>
            <btn className="btn btn-three">CONTACT</btn>
          </AboutText>
        </AboutBottom>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
