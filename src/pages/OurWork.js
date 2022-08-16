import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
//Images
import OrDuMonde from "../img/OrDuMonde.png"
import waced1 from "../img/waced1.png"
import vortex from "../img/vortex.png"
import spacetraveling from "../img/SpaceTraveling.png"
// animations
import { motion } from "framer-motion"
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  sliderAnim,
  sliderContainer,
} from "../animation"
import ScrollTop from "../components/ScrollTop"

const OurWork = () => {
  return (
    <Work
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: "#fff" }}
    >
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <Frame1 variants={sliderAnim}></Frame1>
        <Frame2 variants={sliderAnim}></Frame2>
        <Frame3 variants={sliderAnim}></Frame3>
        <Frame4 variants={sliderAnim}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>OrDuMonde</motion.h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Link to='/work/ordumonde'>
          <Hide>
            <motion.img variants={photoAnim} src={OrDuMonde} alt='ordumonde' />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <h2>Vortex Crypto Trading</h2>
        <div className='line'></div>
        <Link to='/work/the-racer'>
          <img src={vortex} alt='vortex' />
        </Link>
      </Movie>
      <Movie>
        <h2>Waced</h2>
        <div className='line'></div>
        <Link to='/work/waced'>
          <img src={waced1} alt='waced' />
        </Link>
      </Movie>
      <Movie>
        <h2>Space Traveling</h2>
        <div className='line'></div>
        <Link to='/work/spacetraveling'>
          <img src={spacetraveling} alt='spacetraveling' />
        </Link>
      </Movie>
    </Work>
  )
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #008711;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`

const Hide = styled.div`
  overflow: hidden;
`

// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`

const Frame4 = styled(Frame1)`
  background: #8effa0;
`

export default OurWork
