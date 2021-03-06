import { useState } from "react";
import { send } from "emailjs-com";
import {
  FormSection,
  FormContainer,
  InputContainer,
  EmailContainer,
  Submit,
} from "./FormStyles";

const Form = () => {
  const [toSend, setToSend] = useState({
    name: "",
    to_name: "",
    message: "",
    email: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    let nameS = document.getElementById("name");
    let emailS = document.getElementById("email");
    let messageS = document.getElementById("message");
    let formMess = document.querySelector(".formMessage");

    const isEmail = () => {
      let isMail = document.getElementById("email");
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (toSend.email.match(regex)) {
        isMail.style.display = "";
        return true;
      } else {
        isMail.style.border = "1px solid red";
        isMail.style.animation = "dongle 1s";
        setTimeout(() => {
          isMail.style.animation = "none";
        }, 1000);
        return false;
      }
    };

    if (toSend.name && isEmail() && toSend.message) {
      nameS.classList.remove("red");
      emailS.classList.remove("red");
      messageS.classList.remove("red");

      formMess.innerHTML = "Message en cours d'envoi...";
      send(
        "service_rad0ghk",
        "template_4q4ro9m",
        toSend,
        "user_0zfTJ0tbAAI3DLpz50JkD"
      )
        .then((response) => {
          formMess.innerHTML =
            "Message envoyé ! Je vous recontacterai dès que possible.";

          document.getElementById("name").classList.remove("error");
          document.getElementById("email").classList.remove("error");
          document.getElementById("message").classList.remove("error");
          toSend.name = "";
          toSend.email = "";
          toSend.message = "";
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";

          //   setTimeout(() => {
          //     formMess.style.opacity = "0";
          //   }, 5000);
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
    } else {
      formMess.innerHTML = "Merci de remplir correctement les champs requis *";
      formMess.style.background = "rgb(253, 87, 87)";
      formMess.style.opacity = "1";

      if (!toSend.name) {
        nameS.classList.add("error");
      }
      if (!toSend.email) {
        emailS.classList.add("error");
      }
      if (!toSend.message) {
        messageS.classList.add("error");
      }
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <FormSection>
      <FormContainer>
        <InputContainer className="group">
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={handleChange}
            value={toSend.name}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label for="name">Nom</label>
        </InputContainer>
        <InputContainer className="group">
          <input
            type="text"
            id="prenom"
            name="prenom"
            required
            onChange={handleChange}
            // value={toSend.name}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label for="name">Prénom</label>
        </InputContainer>
        <EmailContainer className="group">
          <input
            type="mail"
            id="email"
            name="email"
            required
            onChange={handleChange}
            value={toSend.email}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label for="name">Mail</label>
        </EmailContainer>
        <InputContainer className="group">
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            value={toSend.message}
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label for="message">Message</label>
        </InputContainer>
      </FormContainer>
      <Submit
        className="btn btn-three"
        type="submit"
        value="envoyer"
        onClick={(e) => onSubmit(e)}
      >
        Envoyer
      </Submit>
      <div className="formMessage"></div>
    </FormSection>
  );
};

export default Form;
