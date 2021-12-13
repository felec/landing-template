import { motion } from 'framer-motion';

const dark1Variants = {
  stop: {
    opacity: 0.7,
  },
  play: {
    translateX: '60%',
    translateY: '22%',
    opacity: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
      delay: 4.5,
      repeat: Infinity,
      repeatDelay: 7,
    },
  },
};

const dark2Variants = {
  stop: {
    translateX: '-100%',
    translateY: '-100%',
    opacity: 0.7,
  },
  play: {
    translateX: '0%',
    translateY: '0%',
    transition: {
      duration: 0.75,
      ease: 'easeOut',
      delay: 4.5,
      repeat: Infinity,
      repeatDelay: 7,
    },
  },
};

const light1Variants = {
  stop: {
    opacity: 0.6,
  },
  play: {
    translateX: '22%',
    translateY: '8%',
    transition: {
      type: 'tween',
      duration: 0.75,
      ease: 'easeOut',
      delay: 4.5,
      repeat: Infinity,
      repeatDelay: 7,
    },
  },
};

export const Cubes = () => {
  return (
    <motion.svg
      initial='stop'
      animate='play'
      width='110'
      height='60'
      viewBox='0 0 110 60'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.g variants={dark1Variants} id='dark1'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M25.1607 16.6156V44.0476L48.5791 49L48.8838 19.6836L25.1607 16.6156Z'
          fill='#7F00FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M48.8847 19.6819L70.0001 16.7317V43.9944L48.5792 48.9977L48.8847 19.6819Z'
          fill='#7F00FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M25 15.335L45.6855 11L69.8392 15.4525L48.7239 18.4027L25 15.335Z'
          fill='#7F00FF'
        />
      </motion.g>
      <motion.g variants={dark2Variants} id='dark2'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2.16074 11.6156V39.0476L25.5791 44L25.8838 14.6836L2.16074 11.6156Z'
          fill='#7F00FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M25.8847 14.6819L47.0001 11.7317V38.9944L25.5792 43.9977L25.8847 14.6819Z'
          fill='#7F00FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2 10.335L22.6855 6L46.8392 10.4525L25.7239 13.4027L2 10.335Z'
          fill='#7F00FF'
        />
      </motion.g>
      <motion.g variants={light1Variants} id='light1'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2.16074 11.6156V39.0476L25.5791 44L25.8838 14.6836L2.16074 11.6156Z'
          fill='#E50FE5'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M25.8847 14.6819L47.0001 11.7317V38.9944L25.5792 43.9977L25.8847 14.6819Z'
          fill='#E50FE5'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2 10.335L22.6855 6L46.8392 10.4525L25.7239 13.4027L2 10.335Z'
          fill='#E50FE5'
        />
      </motion.g>
    </motion.svg>
  );
};
