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
            <p>Réalisation de vos projects dans un délais optimal</p>
          </Card>
          <Card>
            <div className='icon'>
              <img alt='icon' src={teamwork} />
              <h3>Team</h3>
            </div>
            <p>Des experts à votre disposition.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img alt='icon' src={diaphragm} />
              <h3>Valeur</h3>
            </div>
            <p>Mise en valeur de vos produits ou services</p>
          </Card>
          <Card>
            <div className='icon'>
              <img alt='icon' src={money} />
              <h3>Compétitif</h3>
            </div>
            <p>Offres concurrentielles</p>
          </Card>
        </Cards>
      </Description>
      <Image className='Image'>
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
  .Image {
    box-shadow: -2px -2px 10px 2px #008711;
  }
  @media (max-width: 550px) {
    h2 {
      font-size: 30px;
    }
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
  @media (max-width: 550px) {
    .icon {
      justify-content: center;
    }
  }
`

export default ServicesSection
