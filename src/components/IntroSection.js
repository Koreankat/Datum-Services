import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import logo from "../img/logo.png"
import bg from "../img/bg-p1.png"
import { Image } from "../Style"

import { Intro } from "../Style"
import { scrollReveal } from "../animation"
import { useScroll } from "../hooks/useScroll"

const IntroSection = () => {
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
          QUI SOMMES
          <span> NOUS</span>
        </h2>
      </div>
      <p>
        Datum Services agit en tant qu’agence de developement Informatique,
        communication et de marketing numériques, dont l’activité principale est
        l'intégration et préparation de vos projets grâce à nos services
        intégrés de publicité, developement web, marketing digitale, graphic
        design...tout en gérant votre business avec le plus grand
        professionnalisme. De A à Z en commençant par l’étude du marché et de
        produits concurrents, en concevant les logos et l’identité visuelle tout
        en terminant par la création de plans marketing stratégiques. Nous
        sommes à votre écoute, pour répondre à tous vos besoins, quel que soit
        votre secteur d’activité. En étudiant attentivement les exigences de vos
        projets et vos objectifs, nous vous accompagnons sur la voie du succès
        avec les conseils les plus importants, les technologies les plus
        efficaces, les orientations et les meilleures idées publicitaires
        innovantes pour vous aider à exceller et à réussir vos projets. Nous
        combinons des méthodes de marketing traditionnelles avec des méthodes
        modernes pour fournir un service marketing intégré qui augmentera la
        valeur de votre marque, Ce dernier qui va établire votre domination et
        mettre en évidence votre présence dans tous les canaux marketing
        digitale, ce qui accélérera votre accès à vos objectifs.
      </p>
    </Services>
  )
}

// Styles
const Services = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 5rem 10rem;
  color: white;

  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 90%;
    padding: 2rem;
    color: #f1f1f1;
    line-height: 1.6;

    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    border: 1px solid #008711;
  }
  div {
    text-align: center;
  }

  @media (max-width: 1300px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem 2rem;
    text-align: center;
    p {
      width: 95%;
    }
    h2 {
      font-size: 30px;
    }
    img {
      width: 180px;
    }
  }
  @media (max-width: 550px) {
    p {
      font-size: 14px;
      text-align: left;
    }
  } ;
`

export default IntroSection
