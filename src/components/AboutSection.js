import React from "react"
import { motion } from "framer-motion"

import home1 from "../img/textile.png"
import { About, Description, Hide, Image } from "../Style"
import { titleAnim, fade, photoAnim } from "../animation"
import Wave from "./Wave"

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>On travail pour</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              transformer <span>vos rêves</span> en realitée.
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contactez nous pour vous aider a déveloper et digitaliser votre marque
          a travers nos solutions fortement conçues qui vont améliorer votre
          boite et inciter le public à agir.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt='person with camera' />
      </Image>
      <Wave />
    </About>
  )
}

export default AboutSection
