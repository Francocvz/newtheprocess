import {
  ContactBottom,
  ContactCards,
  ContactCardsContainer,
  ContactCardsIcon,
  ContactContainer,
  ContactSection,
  ContactTitle,
  ContactTop,
} from "./ContactStyles";
import Marquee from "../Marquee/Marquee";
import Form from "../Form/Form";
// import emailjs from "emailjs-com";

const Contact = () => {
  //   const handleOnSubmit = (e) => {
  //     e.preventDefault();
  //     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
  //       (result) => {
  //         console.log(result.text);
  //         Swal.fire({
  //           icon: "success",
  //           title: "Message Sent Successfully",
  //         });
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         Swal.fire({
  //           icon: "error",
  //           title: "Ooops, something went wrong",
  //           text: error.text,
  //         });
  //       }
  //     );
  //     e.target.reset();
  //   };

  return (
    <ContactSection>
      <ContactContainer>
        <Marquee title={"CONTACT"} />
        <ContactTop>
          <ContactTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </ContactTitle>
          <ContactCardsContainer>
            <ContactCards className="btn btn-three">
              <ContactCardsIcon>
                <img src="./images/localisation2.svg" alt="" />
              </ContactCardsIcon>
              <h5>alsace</h5>
            </ContactCards>
            <ContactCards className="btn btn-three">
              <ContactCardsIcon>
                <img src="./images/phone2.svg" alt="" />
              </ContactCardsIcon>
              <h5>06 69 69 69 69</h5>
            </ContactCards>
          </ContactCardsContainer>
        </ContactTop>
        <ContactBottom>
          <Form />
        </ContactBottom>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
