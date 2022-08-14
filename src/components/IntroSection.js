import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import logo from "../img/logo.png"
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
          QUI SOMMES <span>NOUS</span>
        </h2>

        <img src={logo} alt='logo' />
      </div>
      <p>
        Datum Services agit en tant qu’agence de developement ,communication et
        de marketing numériques, dont l’activité principale est l'intégration et
        préparation de vos projets pour les plateformes digitales grâce à des
        services intégrés de publicité électronique, concevant des sites Web,
        des programmes et des publicités sur des sites de réseaux sociaux tout
        en gérant la publicité électronique avec le plus grand
        professionnalisme. De A à Z en commençant par l’étude du marché et des
        designs concurrents, en concevant les logos et l’identité visuelle et en
        terminant par la création de plans marketing stratégiques. Nous sommes à
        votre écoute, pour répondre à tous vos besoins, quel que soit votre
        secteur d’activité. En étudiant attentivement les exigences de vos
        projets et vos objectifs, nous vous accompagnons sur la voie du succès
        avec les conseils les plus importants, les orientations et les
        meilleures idées publicitaires innovantes pour vous aider à exceller et
        à réussir vos projets. Nous combinons des méthodes de marketing
        traditionnelles avec des méthodes modernes pour fournir un service
        marketing intégré qui augmente la valeur de votre marque, établit votre
        domination et met en évidence votre présence dans tous les canaux
        marketing, ce qui accélère votre accès à vos objectifs commerciaux.
      </p>
    </Services>
  )
}

// Styles
const Services = styled.div`
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
    width: 60%;
    padding: 2rem;
    background-color: #2f4f4f;
    border: 5px solid #2f3f3f;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 350px;
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
