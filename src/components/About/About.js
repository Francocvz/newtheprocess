import { AboutBottom, AboutContainer, AboutImg, AboutImgContainer, AboutSection, AboutText, AboutTop } from "./AboutStyles"


const About =()=> {
    return (
<AboutSection>
    <AboutContainer>
    <AboutTop>
    <h3>LE COACH</h3>
    <h2>TOM <span>SPECALIN</span></h2>
    </AboutTop>
    <AboutBottom>
        <AboutImgContainer>
    <AboutImg src={`./images/about.png`} ></AboutImg>
        </AboutImgContainer>
    <AboutText>
        <h5>Our difference</h5>
        <h3>Train with an experienced coach every session.</h3>
        <p>
        We offer small group personal training sessions with high quality training in a community driven environment. We’ll teach you the fundamentals of barbell lifting and kettlebells in our small gym based classes. You will get stronger, more resilient, and take control of your health and fitness.
        </p>
        <btn>A PROPOS</btn>
    </AboutText>
    </AboutBottom>
    </AboutContainer>
</AboutSection>
    )
}

export default About