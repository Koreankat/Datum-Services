import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
//Images
import OrDuMonde from "../img/OrDuMonde.webp"
import OrDuMondeMob from "../img/OrDuMondeMobile.png"
import waced1 from "../img/waced1.webp"
import waced1Mob from "../img/waced1Mobile.png"
import vortex from "../img/vortex.webp"
import vortexMob from "../img/vortex1mob.png"
import spacetraveling from "../img/SpaceTraveling.webp"
import spacetravelingMob from "../img/SpaceTravelingMob.png"
import richpost from "../img/richpost.png"
import richpostmob from "../img/richpostmob.png"
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
            <motion.img
              variants={photoAnim}
              src={OrDuMonde}
              alt='OrDuMonde homepage'
              className='desk'
            />
            <motion.img
              variants={photoAnim}
              src={OrDuMondeMob}
              alt='OrDuMonde homepage mobile'
              className='mob'
            />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <h2>The Rich Post</h2>
        <div className='line'></div>
        <Link to='/work/richpost'>
          <img src={richpost} alt='richpost hompage' className='desk' />
          <img
            src={richpostmob}
            alt='richpost homepage mobile'
            className='mob'
          />
        </Link>
      </Movie>
      <Movie>
        <h2>Vortex Crypto Trading</h2>
        <div className='line'></div>
        <Link to='/work/vortex'>
          <img src={vortex} alt='Vortex homepage' className='desk' />
          <img src={vortexMob} alt='Vortex homepage mobile' className='mob' />
        </Link>
      </Movie>
      <Movie>
        <h2>Waced</h2>
        <div className='line'></div>
        <Link to='/work/waced'>
          <img src={waced1} alt='Waced homepage' className='desk' />
          <img src={waced1Mob} alt='Waced homepage mobile' className='mob' />
        </Link>
      </Movie>
      <Movie>
        <h2>Space Traveling</h2>
        <div className='line'></div>
        <Link to='/work/spacetraveling'>
          <img
            src={spacetraveling}
            alt='spacetraveling homepage'
            className='desk'
          />
          <img
            src={spacetravelingMob}
            alt='spacetraveling homepage mobile'
            className='mob'
          />
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
  .mob {
    display: block;
  }
  .desk {
    display: none;
  }
  @media (min-width: 550px) {
    .mob {
      display: none;
    }
    .desk {
      display: block;
    }
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
