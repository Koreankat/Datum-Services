import React, { useRef } from "react"
import emailjs from "emailjs-com"
import styled from "styled-components"

import { AnimateSharedLayout } from "framer-motion"
import AOS from "aos"
import { NotificationContainer, NotificationManager } from "react-notifications"
import "react-notifications/lib/notifications.css"

import { About } from "../Style"

import { useScroll } from "../hooks/useScroll"
import { scrollReveal } from "../animation"
AOS.init()
const FaqSection = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_k5douhi",
        "template_xgoeijp",
        form.current,
        "4AFUO7Ua2XiLUj_hH"
      )
      .then(
        (result) => {
          console.log(result.text)
          NotificationManager.success(
            "Thank you for contacting me",
            "Message sent!"
          )
        },
        (error) => {
          console.log(error.text)
          NotificationManager.error(
            "Please try again later",
            "Message could not be sent!"
          )
        }
      )
    e.target.reset()
  }

  return (
    <Faq>
      <h1>
        CONTACTEZ <span>NOUS</span>
      </h1>
      <h2>
        DEMANDER UN RAPPEL
        <br /> DEVIS SANS ENGAGEMENT - CONSULTATION GRATUITE
      </h2>
      <div>
        <form onSubmit={sendEmail} ref={form}>
          <div className='row-1'>
            <input
              type='text'
              autoComplete='off'
              id='user_name'
              name='user_name'
              placeholder='NOM'
              spellCheck='false'
              required
            ></input>

            <input
              type='email'
              autoComplete='off'
              id='user_email'
              name='user_email'
              placeholder='EMAIL'
              spellCheck='false'
              required
            ></input>
          </div>

          <input
            type='text'
            autoComplete='off'
            id='from_name'
            name='from_name'
            placeholder='VOTRE SOCIÉTÉ/ PROJECT/ ORGANISATION'
            spellCheck='false'
          ></input>
          <br></br>

          <textarea
            id='message'
            autoComplete='off'
            name='message'
            placeholder='SUJET'
            spellCheck='false'
          ></textarea>
          <br></br>
          <div className='form-button'>
            <button type='submit' value='Submit'>
              RAPPEL MOI
            </button>
          </div>
        </form>
      </div>
      <NotificationContainer />
    </Faq>
  )
}

// Styles
const Faq = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  span {
    display: block;
  }
  h2 {
    font-weight: 200;
    font-size: 30px;
  }
  input {
    font-family: sans-serif;
    font-size: 17px;
    margin-top: 20px;
    background-color: #2d2c2c;
    border: none;
    text-indent: 10px;
    color: rgb(201, 195, 195);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 500px;
    max-width: 100%;
    height: 50px;
  }
  textarea {
    font-family: sans-serif;
    margin-top: 20px;
    background-color: #2d2c2c;
    border: none;
    font-size: 17px;
    text-indent: 10px;
    padding-top: 10px;
    color: rgb(201, 195, 195);
    max-height: 200px;
    height: 200px;
    width: 100%;
    max-width: 100%;
    resize: none;
    margin-bottom: 20px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-weight: bold;
    font-size: 50px;
  }
  @media (max-width: 550px) {
    h1 {
      font-size: 30px;
      margin-bottom: 10px;
    }
    textarea {
      width: 300px;
    }
    input {
      width: 300px;
    }
    h2 {
      font-size: 20px;
      font-weight: 100;
    }
  }
`

export default FaqSection
