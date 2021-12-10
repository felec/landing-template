import { motion } from 'framer-motion';

export const Triangles = () => {
  return (
    <motion.svg
      initial='stop'
      animate='play'
      width='90'
      height='45'
      viewBox='0 0 90 45'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='triangles'>
        <motion.path
          id='dark2'
          variants={{
            stop: {
              translateX: '-100%',
              opacity: 0.6,
            },
            play: {
              translateX: '0%',
              transition: {
                duration: 0.5,
                ease: 'easeOut',
                repeat: Infinity,
                repeatDelay: 4,
              },
            },
          }}
          d='M31 20.2679C32.3333 21.0377 32.3333 22.9623 31 23.7321L5.5 38.4545C4.16667 39.2243 2.5 38.262 2.5 36.7224L2.5 7.27757C2.5 5.73797 4.16667 4.77572 5.5 5.54552L31 20.2679Z'
          fill='#7f00ff'
        />
        <motion.path
          id='dark1'
          variants={{
            stop: {
              opacity: 0.6,
            },
            play: {
              translateX: '40%',
              opacity: 0,
              transition: {
                duration: 0.5,
                ease: 'easeOut',
                repeat: Infinity,
                repeatDelay: 4,
              },
            },
          }}
          d='M46 20.2679C47.3333 21.0377 47.3333 22.9623 46 23.7321L20.5 38.4545C19.1667 39.2243 17.5 38.262 17.5 36.7224L17.5 7.27757C17.5 5.73797 19.1667 4.77572 20.5 5.54552L46 20.2679Z'
          fill='#7f00ff'
        />
        <motion.path
          id='light1'
          variants={{
            stop: {
              opacity: 0.6,
            },
            play: {
              translateX: '20%',
              transition: {
                type: 'tween',
                duration: 0.5,
                ease: 'easeOut',
                repeat: Infinity,
                repeatDelay: 4,
              },
            },
          }}
          d='M31 20.2679C32.3333 21.0377 32.3333 22.9623 31 23.7321L5.5 38.4545C4.16667 39.2243 2.5 38.262 2.5 36.7224L2.5 7.27757C2.5 5.73797 4.16667 4.77572 5.5 5.54552L31 20.2679Z'
          fill='#e500ff'
        />
      </g>
    </motion.svg>
  );
};
