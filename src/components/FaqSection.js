import React, { useRef } from "react"
import emailjs from "emailjs-com"
import styled from "styled-components"
import AOS from "aos"
import { NotificationContainer, NotificationManager } from "react-notifications"
import "react-notifications/lib/notifications.css"
import { forwardRef } from "react"
import { BsInstagram } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"
AOS.init()
const FaqSection = forwardRef((props, ref) => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_k5douhi",
        "template_05iraz6",
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
    <Faq ref={ref}>
      <h1>
        CONTACTEZ <span>-NOUS</span>
      </h1>
      <h2>
        DEMANDEZ UN RAPPEL
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
          <input
            type='text'
            autoComplete='off'
            id='from_num'
            name='from_num'
            placeholder='NUMERO DE TELEPHONE'
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
              RAPPELEZ NOUS
            </button>
          </div>
        </form>
      </div>
      <NotificationContainer />
      <footer>
        <div className='footer'>
          <h1 className='h1'>
            OU CONTACTEZ <span>&nbsp;NOUS&nbsp;</span> SUR :
          </h1>
          <h2>
            <a
              href='tel:+212656290736'
              style={{
                fontSize: "24px",
                color: "white",
                textDecoration: "none",
                marginBottom: "5px",
              }}
            >
              06 56 29 07 36
            </a>
          </h2>
          <a
            href='https://www.instagram.com/datumservicesma/'
            style={{ marginBottom: "5px" }}
          >
            <BsInstagram style={{ marginRight: "8px" }} />
            <h4>instagram</h4>
          </a>
          <a
            href='https://twitter.com/datumservices'
            style={{ marginBottom: "5px" }}
          >
            <AiFillTwitterCircle style={{ marginRight: "8px" }} />
            <h4>twitter</h4>
          </a>
          <h2 style={{ fontSize: "20px" }}>a.jaafari@datumservices.ma</h2>
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            Copyright © Datum Services . All Right Reserved
          </div>
        </div>
      </footer>
    </Faq>
  )
})

// Styles
const Faq = styled.div`
  a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;

    color: white;
    font-size: 25px;
  }
  .h1 {
    font-size: 30px;
    margin-bottom: 10px;
  }
  footer {
    padding-top: 20px;
    background-color: #282828;
    width: 100%;
  }
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
  button {
    margin-bottom: 10px;
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
  h4 {
    font-weight: 400;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    font-size: 50px;
  }
  @media (max-width: 550px) {
    .h1 {
      font-size: 20px;
    }
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
