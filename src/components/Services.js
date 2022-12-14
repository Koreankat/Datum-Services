import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import wb1 from "../img/wb-b1.webp"
import wb2 from "../img/wb-b2.webp"
import gb1 from "../img/gd-b1.webp"
import gb2 from "../img/gd-b2.webp"
import md1 from "../img/md-b1.webp"
import md2 from "../img/md-b2.webp"

import { scrollReveal } from "../animation"
import { useScroll } from "../hooks/useScroll"

const ServicesSection = () => {
  const [element, controls] = useScroll()
  return (
    <Services
      ref={element}
      variants={scrollReveal}
      animate={controls}
      initial='hide'
    >
      <h2>
        NOS<span> SERVICES</span>
      </h2>
      <section>
        <div className='div1'>
          <h1>
            <span>Graphic Design</span>
          </h1>
          <ul className='ul1'>
            <li>
              Logos, Design 3D,
              <br /> Conception illustrative...
            </li>
            <li>UI/UX design</li>
            <li>Illustration Digitale</li>
            <li>Branding</li>
          </ul>
        </div>
        <div className='div2'>
          <h1>
            <span>Developpement Web</span>
          </h1>
          <ul className='ul2'>
            <li>Conception site web</li>
            <li>Conception Site e-commerce</li>
            <li>Application web et mobile</li>
            <li>Déploiement CRM / ERP</li>
            <li>Chatbot</li>
            <li>Hébergement et maintenance</li>
            <li>Outils d'analyse orientés IA</li>
          </ul>
        </div>
        <div className='div3'>
          <h1>
            <span>Marketing Digital</span>
          </h1>
          <ul className='ul3'>
            <li>Branding</li>
            <li>Optimisation du moteur de recherche</li>
            <li>Marketing de contenu</li>
            <li>Campagne réseaux sociaux</li>
            <li>Référencement SEO/SEA/SMO</li>
            <li>E-mailing</li>
            <li>Campagne de génération de leads</li>
          </ul>
        </div>
      </section>
    </Services>
  )
}

// Styles
const Services = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #f1f1f1;
  align-items: center;
  h1 {
    font-size: 30px;
  }
  ul {
    font-size: 18px;
    line-height: 1.6;
    margin: 10px;
  }
  .ul1 {
    line-height: 2.2;
  }
  .ul2 {
    line-height: 1.8;
  }
  .ul3 {
    line-height: 1.8;
  }

  div {
    width: 32%;
    border: 2px solid #008711;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.5s ease-in-out;
  }
  div {
    transition: 0.5s ease-in-out;
    height: 300px;
  }
  .div1 {
    background-image: url(${wb1});
    background-size: cover;
    background-repeat: no-repeat;
  }
  .div1:hover {
    background-image: url(${wb2});
  }
  .div2 {
    background-image: url(${gb1});
    background-size: cover;
    background-repeat: no-repeat;
  }
  .div2:hover {
    background-image: url(${gb2});
  }
  .div3 {
    background-image: url(${md1});
    background-size: cover;
    background-repeat: no-repeat;
  }
  .div3:hover {
    background-image: url(${md2});
  }
  h2 {
    padding-bottom: 5rem;
  }
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
  }
  @media (max-width: 1060px) {
    ul {
      font-size: 18px;
    }
    h1 {
      font-size: 25px;
    }
    section {
      flex-direction: column;
      width: 90%;
    }
    div {
      width: 90%;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 550px) {
    h1 {
      font-size: 20px;
    }
    ul {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }

    h2 {
      font-size: 30px;
    }
  }
`

export default ServicesSection
