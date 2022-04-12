import React, { useEffect, useMemo, useState } from 'react';
import './work.scss'

import { images } from '../../constants'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

// import { AppWrap, MotionWrap } from '../../wrapper';


interface IWorks {
  title: string
  img: string
  tags: string[]
  projectLink: string
  codeLink: string
  description: string
}

export const Work = () => {
  const [filteredWork, setFilteredWork] = useState<Array<IWorks> | []>([]);
  const [filter, setFilter] = useState<string>('All');
  const [animateCard, setAnimateCard] = useState<{y:number, opacity: number}>({ y: 0, opacity: 1 });

  const works: Array<IWorks> = useMemo(() => [
    {title: 'Web3.0 Project ', tags: ['React JS', 'UI/UX', 'Web App', 'All'], description: 'A web3.0 app built with React JS & Solidity', img: images.about01, projectLink: 'https://www.google.com/', codeLink: 'https://github.com/' },
    {title: 'Blog Website', tags: ['React JS','UI/UX', 'Web App', 'All'], description: 'A blog app built with React JS', img: images.about02, projectLink: 'https://www.google.com/', codeLink: 'https://github.com/' },
    {title: 'Ewalle Wallet App', tags: ['Mobile App', 'UI/UX', 'All'], description: 'A Ewalle wallet app built with React Native', img: images.about03, projectLink: 'https://www.google.com/', codeLink: 'https://github.com/' },
    {title: 'Mern App', tags: ['React JS', 'Web App', 'All'], description: 'A MERN app built with React JS & MongoDB', img: images.about03, projectLink: 'https://www.google.com/',codeLink: 'https://github.com/' },
    {title: 'Shareme Website', tags: ['Mobile App', 'All'], description: 'A Shareme Website app built with React Native', img: images.about04, projectLink: 'https://www.google.com/',codeLink: 'https://github.com/' },
    {title: 'Starbags Clone', tags: ['React JS', 'Web App', 'UI/UX', 'All'], description: 'A Starbags Clone app built with React JS & MongoDB', img: images.about03, projectLink: 'https://www.google.com/',codeLink: 'https://github.com/' },
    {title: 'Community App', tags: ['Mobile App', 'All'], description: 'A Community App built with React Native & MongoDB', img: images.about02, projectLink: 'https://www.google.com/',codeLink: 'https://github.com/' },
    {title: 'Sweet Shop', tags: ['Mobile App', 'UI/UX', 'All'], description: 'A Sweet Shop app built with React JS & MongoDB', img: images.about04, projectLink: 'https://www.google.com/',codeLink: 'https://github.com/' },
  ], [])

  useEffect(() => {
    setFilteredWork(works)
  }, [])
  
  const handleWorkFilter = (item: string) => {
    setFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === 'All') {
        setFilteredWork(works);
      } else {
        setFilteredWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${filter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard as any}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filteredWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={work.img} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0,1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};
