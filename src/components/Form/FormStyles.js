import styled from "styled-components";

export const FormSection = styled.div`
  color: white;
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .error::placeholder {
    color: red;
  }
  .form-message {
    margin-top: 10px;
    padding: 12px;
    opacity: 0;
    background: yellow;
    transition: 0.3s ease;
    color: white;
    border-radius: 4px;
    box-shadow: 0 0 2px rgba(51, 51, 51, 0.3);
  }
  .btn {
    line-height: 50px;
    height: 50px;
    width: 100%;
    text-align: center;
    width: 80%;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: bold;
  }

  .btn-three {
    color: #fff;
    transition: all 0.5s;
    position: relative;
  }
  .btn-three::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
  }
  .btn-three:hover::before {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }
  .btn-three::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid white;
    transform: scale(1.2, 1.2);
  }
  .btn-three:hover::after {
    opacity: 1;
    transform: scale(0.9, 0.9);
  }
`;

export const Submit = styled.div`
  width: 100%;
  color: white;
  margin-bottom: 1rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: start;
  height: 80%;
  width: 80%;
  align-items: center;

  .group {
    position: relative;
    margin-bottom: 3rem;
    input,
    textarea {
      font-size: 18px;
      padding: 10px 10px 10px 5px;
      display: block;
      width: 100%;
      border: none;
      border-bottom: 1px solid #757575;
      background: black;
      color: white;
    }
    input:focus,
    textarea {
      outline: none;
    }

    /* LABEL ======================================= */
    label {
      color: #999;
      font-size: 18px;
      font-weight: normal;
      position: absolute;
      pointer-events: none;
      left: 5px;
      top: 10px;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }

    /* active state */
    input:focus ~ label,
    input:valid ~ label,
    ,
    textarea:focus ~ label,
    ,
    textarea:focus ~ label {
      top: -20px;
      font-size: 14px;
      color: orange;
    }

    /* BOTTOM BARS ================================= */
    .bar {
      position: relative;
      display: block;
      width: 300px;
    }
    .bar:before,
    .bar:after {
      content: "";
      height: 2px;
      width: 0;
      bottom: 1px;
      position: absolute;
      background: orange;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }
    .bar:before {
      left: 50%;
    }
    .bar:after {
      right: 50%;
    }

    /* active state */
    input:focus ~ .bar:before,
    input:focus ~ .bar:after {
      width: 50%;
    }

    /* HIGHLIGHTER ================================== */
    .highlight {
      position: absolute;
      height: 60%;
      width: 100px;
      top: 25%;
      left: 0;
      pointer-events: none;
      opacity: 0.5;
      color: red;
    }

    /* active state */
    input:focus ~ .highlight {
      -webkit-animation: inputHighlighter 0.3s ease;
      -moz-animation: inputHighlighter 0.3s ease;
      animation: inputHighlighter 0.3s ease;
    }

    /* ANIMATIONS ================ */
    @-webkit-keyframes inputHighlighter {
      from {
        background: #5264ae;
      }
      to {
        width: 0;
        background: transparent;
      }
    }
    @-moz-keyframes inputHighlighter {
      from {
        background: #5264ae;
      }
      to {
        width: 0;
        background: transparent;
      }
    }
    @keyframes inputHighlighter {
      from {
        background: #5264ae;
      }
      to {
        width: 0;
        background: transparent;
      }
    }
  }

  textarea {
    resize: none;
    height: 150px;
  }
`;

export const InputContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  background-color: black;
  color: white;
  label {
  }
`;

export const EmailContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.4rem;
  @keyframes dongle {
    0% {
      transform: translate(0px, 0px);
    }
    10% {
      transform: translate(-5px, 0px);
    }
    20% {
      transform: translate(5px, 0px);
    }
    30% {
      transform: translate(-5px, 0px);
    }
    40% {
      transform: translate(5px, 0px);
    }
    50% {
      transform: translate(-5px, 0px);
    }
    60% {
      transform: translate(5px, 0px);
    }
    70% {
      transform: translate(-5px, 0px);
    }
    80% {
      transform: translate(5px, 0px);
    }
    90% {
      transform: translate(-5px, 0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
`;
