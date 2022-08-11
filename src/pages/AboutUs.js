import React from "react"

import AboutSection from "../components/AboutSection"
import FaqSection from "../components/FaqSection"
import ServicesSection from "../components/ServicesSection"
import IntroSection from "../components/IntroSection"
// animations
import { motion } from "framer-motion"
import { pageAnimation } from "../animation"
import ScrollTop from "../components/ScrollTop"
import PhilosophySection from "../components/PhilosophySection"

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <ScrollTop />
      <AboutSection />
      <ServicesSection />
      <IntroSection />
      <PhilosophySection />
      <FaqSection />
    </motion.div>
  )
}

export default AboutUs
