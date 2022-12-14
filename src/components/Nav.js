import React from "react"
import styled from "styled-components"

import { NavLink, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import logo from "../img/logov1.png"
import "./styles.css"

const Nav = () => {
  const { pathname } = useLocation()

  return (
    <StyledNav>
      <h1>
        <NavLink to='/'>
          <img src={logo} id='logo' alt='logo' style={{ width: "125px" }}></img>
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to='/'>1. About Us</NavLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          ></Line>
        </li>
        <li>
          <NavLink to='/work'>2. Our Work</NavLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
          ></Line>
        </li>
        <li>
          <NavLink to='/contact'>3. Our Team</NavLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          ></Line>
        </li>
      </ul>
    </StyledNav>
  )
}

// styles
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 1rem 10rem;
  width: 100%;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    position: static;
    padding: 2rem 1rem;

    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`

const Line = styled(motion.div)`
  height: 0.3rem;
  width: 0%;
  background: #008711;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0;
  }
`

export default Nav
