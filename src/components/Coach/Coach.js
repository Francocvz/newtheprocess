import { AboutImg, AboutSection, AboutText } from "../About/AboutStyles"
import { CoachSection } from "./CoachStyles"

const Coach = () => {
    return (
        <CoachSection>
<AboutSection>
    <AboutText className='texte'>
        <h2>Rencontre ton Coach.</h2>
        <p>Chris & Trent. The Yin & Yang of the gym, they compliment each other with differing and overlapping training styles, coaching methodologies and personalities. Their gym is an ecosystem of knowledge, diversity and inclusivity. Our team is dedicated to helping you acheive your health and fitness goals and to help you on your journey to success, however that looks for you.</p>
    </AboutText>
    <AboutImg className='image' src={'./images/about.png'}/>
    
    
    
   
</AboutSection>
<div className="name">
    <p>Tom Specalin</p>
    </div>
        </CoachSection>
    )
}

export default Coach