import React from "react"
import { motion } from "framer-motion"
import home1 from "../img/textile.png"
import { About, Description, Hide, Image } from "../Style"
import { titleAnim, fade, photoAnim } from "../animation"
import { useEffect } from "react"
import Wave from "./Wave"

const AboutSection = ({ resultRef }) => {
  const onSubmit = (e) => {
    e.preventDefault()
    resultRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Transformez <span>vos besoins</span> en action
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contactez-nous pour vous aider à développer et digitaliser votre
          marque à travers nos solutions conçues pour valoriser votre
          entreprise.
        </motion.p>

        <motion.button variants={fade} onClick={onSubmit}>
          Contactez-nous
        </motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt='person with camera' />
      </Image>
      <Wave />
    </About>
  )
}

export default AboutSection
