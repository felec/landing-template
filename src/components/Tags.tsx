import { motion } from 'framer-motion';

const swingVariants = {
  stop: {
    rotate: 0,
    transformOrigin: '26px 38px',
  },
  play: {
    rotate: 45,
    transition: {
      duration: 1,
      ease: 'backIn',
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
};

export const Tags = () => {
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
      <g id='tag1'>
        <path
          d='M25.3227 5.88697C25.6972 5.56598 26.2498 5.56598 26.6243 5.88697L35.2766 13.3032C35.4983 13.4932 35.6258 13.7706 35.6258 14.0625V42.9383C35.6258 43.4906 35.1781 43.9383 34.6258 43.9383H17.3212C16.7689 43.9383 16.3212 43.4906 16.3212 42.9383V14.0625C16.3212 13.7706 16.4488 13.4932 16.6704 13.3032L25.3227 5.88697Z'
          fill='#7F00FF'
          fill-opacity='0.6'
        />
        <ellipse
          cx='26.1711'
          cy='11.7884'
          rx='1.93046'
          ry='1.96986'
          fill='#fff'
        />
      </g>
      <motion.g variants={swingVariants} id='tag2'>
        <path
          d='M28.7979 6.24313C29.2856 6.16937 29.7542 6.4622 29.9017 6.93287L33.3092 17.8072C33.3965 18.0858 33.3577 18.3886 33.203 18.6362L17.9012 43.1243C17.6085 43.5926 16.9916 43.7351 16.5232 43.4424L1.84805 34.2724C1.37969 33.9797 1.23726 33.3628 1.52993 32.8944L16.8318 8.40629C16.9865 8.15872 17.2416 7.99111 17.5303 7.94745L28.7979 6.24313Z'
          fill='#E50FE5'
          fill-opacity='0.6'
        />
        <ellipse
          cx='26.39'
          cy='11.6974'
          rx='1.93046'
          ry='1.96986'
          transform='rotate(32 26.39 11.6974)'
          fill='#fff'
        />
      </motion.g>
    </motion.svg>
  );
};
