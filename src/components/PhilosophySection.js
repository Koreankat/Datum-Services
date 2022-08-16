import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import bg from "../img/bg-p1.png"
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
          Le moment présent est celui de l'invention et l'innovation. C’est la
          fin des anciennes méthodes et le début de nouvelles démarches. Nous
          pensons que l’avenir est entre les mains des personnes qui vivent dans
          un monde digital. êtes vous prêt ? <br />
          Relevons ensemble le défi !
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
    color: #f1f1f1;
    text-align: center;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    border: 1px solid #008711;
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
