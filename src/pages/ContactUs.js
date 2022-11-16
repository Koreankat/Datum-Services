import React from "react"
//Animations
import { motion } from "framer-motion"
import { pageAnimation } from "../animation"
import styled from "styled-components"

const ContactUs = () => {
  return (
    <ContactStyle
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      style={{ background: "#fff" }}
    >
      <h2>Under development...</h2>
    </ContactStyle>
  )
}

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;

  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`

export default ContactUs
