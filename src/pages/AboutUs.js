import React from "react"
import { useRef } from "react"
import AboutSection from "../components/AboutSection"
import FaqSection from "../components/FaqSection"
import ServicesSection from "../components/ServicesSection"
import IntroSection from "../components/IntroSection"
// animations
import { motion } from "framer-motion"
import { pageAnimation } from "../animation"
import ScrollTop from "../components/ScrollTop"
import Services from "../components/Services"
import PhilosophySection from "../components/PhilosophySection"

const AboutUs = () => {
  const resultRef = useRef(null)
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ width: "100%" }}
    >
      <ScrollTop />
      <AboutSection resultRef={resultRef} />
      <Services />
      <ServicesSection />
      <IntroSection />
      <PhilosophySection />
      <FaqSection ref={resultRef} />
    </motion.div>
  )
}

export default AboutUs
