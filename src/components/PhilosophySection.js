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
          la fin des anciennes certitudes et le début de nouvelles opportunités.
          Mais si c’est maintenant, qu’est-ce qui vient après ? Nous pensons que
          l’avenir est entre les mains des personnes qui vivent dans un monde
          digital. Le monde digital donne du pouvoir aux gens. Ils décident de
          ce qu’ils aiment, où ils s’engagent et ce qu’ils soutiennent. Ils sont
          connectés et contrôlent la situation. Votre défi – et le nôtre – est
          de le relever.
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
    padding: 2rem 2rem;
    text-align: center;
    p {
      width: 80%;
    }
    h2 {
      font-size: 30px;
    }
  }
  @media (max-width: 550px) {
    p {
      width: 80%;
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
