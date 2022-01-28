import { ContactCards, ContactContainerCards, ContactSection, ContactTitle } from "./ContactStyles"
import {FormData} from '../../data/FormData'
import { FormulaireSection } from "../Formulaire/FormulaireStyles"
import Formulaire from "../Formulaire/Formulaire"


const Contact =() => {
    return (
        <ContactSection>
            <ContactTitle>
                <p>Contact</p>
                <h2>Feel free to shoot us a message or drop in anytime</h2>
            </ContactTitle>
            <ContactContainerCards>
            {FormData.map((el, index) => (
                        <ContactCards key={index}>
                            <img src={el.icon}/>
                            <p>{el.description}</p>

                        </ContactCards>
                    ))}

            </ContactContainerCards>
            <FormulaireSection>
                <Formulaire/>
            </FormulaireSection>
        </ContactSection>
        )
}
export default Contact