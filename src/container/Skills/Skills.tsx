import React, { useMemo } from 'react'
import './skills.scss'

import { images } from '../../constants'
import { motion } from 'framer-motion'
import ReactTooltip from 'react-tooltip'
import { AppWrap, MotionWrap } from '../../wrapper'

interface IExperiences {
  year: string
  works: Array<{ title: string; company: string; desc: string }>
}

interface ISkills {
  title: string
  img: string
}

const Skills = () => {

  const skills: Array<ISkills> = useMemo(
    () => [
      { title: 'GIT', img: images.git },
      { title: 'CSS', img: images.css },
      { title: 'HTML', img: images.html },
      { title: 'JS', img: images.react },
      { title: 'SASS', img: images.sass },
      { title: 'FIGMA', img: images.figma },
      { title: 'NODE JS', img: images.node },
      { title: 'REDUX', img: images.redux },
      { title: 'REACT', img: images.react },
      { title: 'JAVASCRIPT', img: images.javascript },
    ],
    [],
  )

  const experiences: Array<IExperiences> = useMemo(
    () => [
      {
        year: '2021',
        works: [
          {
            title: 'Frontend Developer',
            company: 'Google',
            desc: "I've worked as frontend developer",
          },
          {
            title: 'Frontend Developer',
            company: 'Twitter',
            desc: "I've worked as frontend developer",
          },
          {
            title: 'Backend Developer',
            company: 'EPAM',
            desc: "I've worked as backendend developer",
          },
          {
            title: 'Fullstack Developer',
            company: 'EPAM',
            desc: "I've worked as fullstack developer",
          },
        ],
      },
    ],
    [],
  )

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.title}>
              {/* <div className="app__flex" style={{ backgroundColor: skill.bgColor }}> */}
              <div className="app__flex">
                <img src={skill.img} alt={skill.title} />
              </div>
              <p className="p-text">{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.title}
                      key={work.title}>
                      <h4 className="bold-text">{work.title}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.title   }
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip">
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}


export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
