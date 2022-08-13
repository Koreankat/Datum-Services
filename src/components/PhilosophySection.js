import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import philosophie from "../img/test.png"

import { Intro, Image } from "../Style"
import { scrollReveal } from "../animation"
import { useScroll } from "../hooks/useScroll"

const PhilosophySection = () => {
  const [element, controls] = useScroll()
  return (
    <Services
      ref={element}
      variants={scrollReveal}
      animate={controls}
      initial='hide'
    >
      <div>
        <h2>
          NOTRE<span> PHILOSOPHIE</span>
        </h2>
        <p>
          Le moment présent est celui du changement et de la perturbation. C’est
          la fin des anciennes méthodes et le début de nouvelles opportunités.
          Nous pensons que l’avenir est entre les mains des personnes qui vivent
          dans un monde digital. êtes vous prêt ? <br />
          Votre défi – et le nôtre – est de le relever.
        </p>
      </div>

      <img src={philosophie} alt='philo'></img>
    </Services>
  )
}

// Styles
const Services = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 5rem 10rem;
  color: white;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 90%;
    padding: 2rem;
    background-color: #2f4f4f;
    text-align: center;
    border: 5px solid #2f3f3f;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 500px;
  }
  @media (max-width: 1300px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    p {
      width: 80%;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 30px;
    }
  }
  @media (max-width: 550px) {
    p {
      width: 280px;
      font-size: 14px;
      text-align: left;
    }
    img {
      max-width: 330px;
    }
    h2 {
      font-size: 30px;
    }
  }
`

export default PhilosophySection
