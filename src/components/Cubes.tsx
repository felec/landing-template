import { motion } from 'framer-motion';

const dark1Variants = {
  stop: {
    opacity: 0.7,
  },
  play: {
    translateX: '50%',
    translateY: '24%',
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
    translateX: '14%',
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
      width='125'
      height='50'
      viewBox='0 0 125 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.g variants={dark1Variants} id='dark1'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M24.3131 14.3938V36.0841L42.83 40L43.0709 16.8196L24.3131 14.3938Z'
          fill='#7F00FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M43.0716 16.8182L59.7675 14.4855V36.0421L42.83 39.9982L43.0716 16.8182Z'
          fill='#7F00FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M24.1861 13.3812L40.542 9.95348L59.6403 13.4741L42.9445 15.8068L24.1861 13.3812Z'
          fill='#7F00FF'
        />
      </motion.g>

      <motion.g variants={dark2Variants} id='dark2'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6.12709 10.4403V32.1306L24.6439 36.0465L24.8849 12.8661L6.12709 10.4403Z'
          fill='#7F00FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M24.8856 12.8647L41.5814 10.532V32.0886L24.644 36.0447L24.8856 12.8647Z'
          fill='#7F00FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6 9.42771L22.3559 6L41.4543 9.52059L24.7584 11.8533L6 9.42771Z'
          fill='#7F00FF'
        />
      </motion.g>

      <motion.g variants={light1Variants} id='light1'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6.12709 10.4403V32.1306L24.6439 36.0465L24.8849 12.8661L6.12709 10.4403Z'
          fill='#E50FE5'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M24.8856 12.8647L41.5814 10.532V32.0886L24.644 36.0447L24.8856 12.8647Z'
          fill='#E50FE5'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6 9.42771L22.3559 6L41.4543 9.52059L24.7584 11.8533L6 9.42771Z'
          fill='#E50FE5'
        />
      </motion.g>
    </motion.svg>
  );
};
