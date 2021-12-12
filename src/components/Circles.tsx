import { motion } from 'framer-motion';

const circleVariants = {
  stop: {
    pathLength: 0,
    strokeWidth: 2.5,
  },
  play: {
    pathLength: 1,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
      repeat: Infinity,
      repeatDelay: 7,
    },
  },
};

const heartVariants = {
  stop: {
    scale: 1,
  },
  play: {
    scale: [1, 0.75, 1.5, 1],
    transition: {
      duration: 0.75,
      repeat: Infinity,
      repeatDelay: 7,
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
          opacity='0.7'
          d='M23.1228 48.9973C35.3409 48.9973 45.2456 39.5902 45.2456 27.9859C45.2456 16.3816 35.3409 6.97451 23.1228 6.97451C10.9047 6.97451 1 16.3816 1 27.9859C1 39.5902 10.9047 48.9973 23.1228 48.9973Z'
          fill='#7F00FF'
        />
        <motion.path
          variants={circleVariants}
          d='M1 29.1454H9.79871L12.564 22.5703L19.1003 40.1871L24.631 15.25L29.4075 29.2695L45.2499 29.1454'
          stroke='#fff'
          strokeWidth='2.5'
        />
      </g>
      <motion.g variants={heartVariants} id='circle2'>
        <path
          opacity='0.6'
          d='M37.3895 20.9971C42.145 20.9971 46 17.1922 46 12.4986C46 7.80494 42.145 4 37.3895 4C32.6341 4 28.779 7.80494 28.779 12.4986C28.779 17.1922 32.6341 20.9971 37.3895 20.9971Z'
          fill='#E50FE5'
        />
        <path
          d='M41.6196 12.588C40.8676 13.9923 38.8561 15.9022 37.7185 16.9196C37.5962 17.0268 37.4102 17.0268 37.2879 16.9196C36.1439 15.9022 34.1324 13.9923 33.3804 12.588C31.7287 9.49847 35.8933 7.43878 37.5 10.5283C39.1067 7.43878 43.2713 9.49847 41.6196 12.588Z'
          fill='#fff'
        />
      </motion.g>
    </motion.svg>
  );
};
