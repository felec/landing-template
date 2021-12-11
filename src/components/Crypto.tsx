import { motion } from 'framer-motion';

const svgVariants = {
  normal: {
    translateY: 0,
  },
  hover: {
    translateY: -8,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
};

const diamondVariants = {
  normal: {
    translateY: 0,
  },
  hover: {
    translateY: -12,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
};

export const Crypto = () => {
  return (
    <motion.svg
      initial='normal'
      whileHover='hover'
      variants={svgVariants}
      width='150'
      height='225'
      viewBox='0 0 150 225'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        id='shadow'
        d='M21 188.39L75.3775 219.78L129.755 188.39L75.3775 157L21 188.39Z'
        fill='url(#paint0_linear_2_2)'
      />

      <g id='platform'>
        <path
          d='M75.3616 130.952L43.4327 149.39H21V162.342L75.3616 193.732L129.739 162.342V149.39H107.291L75.3616 130.952Z'
          fill='#24285B'
        />
        <path
          opacity='0.22'
          d='M75.3616 130.952L43.4327 149.39H21V162.342L75.3616 193.732L129.739 162.342V149.39H107.291L75.3616 130.952Z'
          fill='#fff'
        />
        <path
          d='M75.3616 180.78L129.739 149.39L75.3616 118L21 149.39L75.3616 180.78Z'
          fill='#302041'
        />
      </g>

      <motion.g variants={diamondVariants} id='diamond'>
        <path
          d='M111.011 93.1294L74.5054 119.099L38 93.1294L74.5054 74.8845L111.011 93.1294Z'
          fill='#4B088E'
        />
        <path
          d='M74.5054 107.976V36L38 85.266L74.5054 107.976Z'
          fill='#7F00FF'
        />
        <path
          d='M74.5054 107.976V36L111.011 85.266L74.5054 107.976Z'
          fill='#7F00FF'
        />
        <path
          opacity='0.44'
          d='M74.5054 107.976V36L111.011 85.266L74.5054 107.976Z'
          fill='#fff'
        />
        <path
          d='M74.5054 119.099V144.033L38 93.1294L74.5054 119.099Z'
          fill='#7F00FF'
        />
        <path
          d='M74.5054 119.099V144.033L111.011 93.1294L74.5054 119.099Z'
          fill='#7F00FF'
        />
        <path
          opacity='0.44'
          d='M74.5054 119.099V144.033L111.011 93.1294L74.5054 119.099Z'
          fill='#fff'
        />
      </motion.g>
      <defs>
        <linearGradient
          id='paint0_linear_2_2'
          x1='71.9284'
          y1='195.296'
          x2='169.404'
          y2='240.954'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#E4E4E4' />
          <stop offset='1' stop-color='#E4E4E4' stop-opacity='0' />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};
