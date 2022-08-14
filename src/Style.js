import styled from "styled-components"
import { motion } from "framer-motion"

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`
export const Intro = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem 2rem;
    text-align: center;
  }
`

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: bold;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      padding: 1.5rem;
      margin-bottom: 5rem;
    }
  }
`

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
  @media (max-width: 550px) {
    img {
      width: 100%;
      height: auto;
    }
  }
`

export const Hide = styled.div`
  overflow: hidden;
`
