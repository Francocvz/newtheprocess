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

      // voir doc : https://www.emailjs.com/docs/examples/reactjs/
      send(
        "service_rad0ghk",
        "template_4q4ro9m",
        toSend,
        "user_0zfTJ0tbAAI3DLpz50JkD"
      ).then(
        () => {
          formMess.innerHTML =
            "Message envoyé ! Je vous recontacterai dès que possible.";

          document.getElementById("name").classList.remove("error");
          document.getElementById("email").classList.remove("error");
          document.getElementById("message").classList.remove("error");
          toSend.name("");
          toSend.email("");
          toSend.message("");
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";

          setTimeout(() => {
            formMess.style.opacity = "0";
          }, 5000);
        },
        (err) => {
          console.log(err);
          formMess.style.background = "rgb(253, 87, 87)";
          formMess.innerHTML = "Une erreur s'est produite, veuillez réessayer.";
        }
      );
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
        <InputContainer>
          <label for="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={handleChange}
            placeholder="nom *"
            value={toSend.name}
          />
        </InputContainer>
        <EmailContainer>
          <label for="name">Mail</label>

          <input
            type="mail"
            id="email"
            name="email"
            required
            onChange={handleChange}
            placeholder="email *"
            value={toSend.email}
          />
        </EmailContainer>
        <InputContainer>
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            placeholder="message *"
            value={toSend.message}
            required
          />
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
