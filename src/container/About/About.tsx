import React, { useMemo } from 'react'
import './about.scss'
import { images } from '../../constants'
import { motion } from 'framer-motion'

interface IAbouts {
  title: string
  description: string
  img: string
}

export const About = () => {

  const abouts: Array<IAbouts> = useMemo(() => [
    { title: 'Web development', description: 'I am good web developer', img: images.about01 },
    { title: 'Web design', description: 'I am good web developer', img: images.about02 },
    { title: 'UI/UX', description: 'I am good web developer', img: images.about03 },
    { title: 'Web animations', description: 'I am good web developer', img: images.about04 },
  ], [])

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}>
            <img src={about.img} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}
