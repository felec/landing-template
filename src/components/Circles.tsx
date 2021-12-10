import { motion } from 'framer-motion';

const beatVariants = {
  stop: {
    pathLength: 1,
    strokeWidth: 4,
  },
  play: {
    pathLength: [0, 1],
    transition: {
      duration: 0.75,
      ease: 'easeOut',
      repeat: Infinity,
      delay: 4,
      repeatDelay: 2,
    },
  },
};

const checkVariants = {
  stop: {
    pathLength: 1,
    strokeWidth: 3,
  },
  play: {
    pathLength: [0, 1],
    transition: {
      duration: 0.75,

      ease: 'easeOut',
      repeat: Infinity,
      delay: 5,
      repeatDelay: 2,
    },
  },
};

export const Circles = () => {
  return (
    <motion.svg
      initial='stop'
      animate='play'
      width='50'
      height='50'
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='circle1'>
        <path
          opacity='0.6'
          d='M24.581 49.9972C38.1567 49.9972 49.162 39.5448 49.162 26.6511C49.162 13.7574 38.1567 3.30502 24.581 3.30502C11.0053 3.30502 0 13.7574 0 26.6511C0 39.5448 11.0053 49.9972 24.581 49.9972Z'
          fill='#7F00FF'
        />
        <motion.path
          variants={beatVariants}
          d='M0 27.9394H9.77638L12.849 20.6337L20.1115 40.208L26.2568 12.5001L31.564 28.0773L49.1667 27.9394'
          stroke='#fff'
          stroke-width='4'
        />
      </g>
      <g id='circle2'>
        <path
          opacity='0.6'
          d='M40.4329 18.8858C45.7168 18.8858 50.0002 14.658 50.0002 9.44288C50.0002 4.22772 45.7168 0 40.4329 0C35.1491 0 30.8657 4.22772 30.8657 9.44288C30.8657 14.658 35.1491 18.8858 40.4329 18.8858Z'
          fill='#E50FE5'
        />
        <motion.path
          variants={checkVariants}
          d='M34.6368 9.7879L38.1285 13.0963L45.8097 4.68768'
          stroke='#fff'
          stroke-width='3'
        />
      </g>
    </motion.svg>
  );
};
