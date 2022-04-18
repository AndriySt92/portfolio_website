import React from 'react';
import { motion } from 'framer-motion';

interface MotionWrapProps {
  Component: React.FunctionComponent
  classNames: string[]
}

export const MotionWrap = (Component: React.FunctionComponent, className:string) => function HOC() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={`${className} app__flex`}
    >
      <Component />
    </motion.div>
  );
};

