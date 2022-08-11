import React from "react"
import styled from "styled-components"

import clock from "../img/clock.svg"
import diaphragm from "../img/diaphragm.svg"
import money from "../img/money.svg"
import teamwork from "../img/teamwork.svg"
import home2 from "../img/home2.jpeg"
import { About, Description, Image } from "../Style"
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
      <Description>
        <h2>
          Prestations de haute <span>qualité</span>
        </h2>
        <Cards>
          <Card>
            <div className='icon'>
              <img alt='icon' src={clock} />
              <h3>Rapide</h3>
            </div>
            <p>Réalisation de vos rêves en periode courte.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img alt='icon' src={teamwork} />
              <h3>Experts</h3>
            </div>
            <p>Equipe d'experts fortement experimentés.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img alt='icon' src={diaphragm} />
              <h3>Valeur</h3>
            </div>
            <p>Produit magnifiquement conçu</p>
          </Card>
          <Card>
            <div className='icon'>
              <img alt='icon' src={money} />
              <h3>Abordable</h3>
            </div>
            <p>Facturation compétitive.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img alt='camera' src={home2} />
      </Image>
    </Services>
  )
}

// Styles
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`

export default ServicesSection
