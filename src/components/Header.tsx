import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

import { HeaderNav } from './HeaderNav';
import { ReactComponent as Logo } from '../assets/svgs/company_logo.svg';

export const Header = () => {
  const anim = useAnimation();
  const [headRef, headInView] = useInView({ initialInView: true });

  useEffect(() => {
    if (headInView) {
      anim.start({
        backgroundColor: 'transparent',
        color: '#fff',
        translateY: 0,
        boxShadow: '',
      });
    } else {
      anim.start({
        backgroundColor: '#fff',
        color: '#000',
        translateY: -36,
        boxShadow:
          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        transition: {
          duration: 0.15,
          ease: 'easeOut',
        },
      });
    }
    // eslint-disable-next-line
  }, [headInView]);

  return (
    <header ref={headRef} className='z-40'>
      <motion.div
        animate={anim}
        className='fixed w-full flex items-center justify-evenly'
      >
        <div className='flex items-center my-2 text-3xl font-light font-mono cursor-pointer'>
          <Logo />
          <h2 className='ml-2'>Company</h2>
        </div>

        <div className='w-20'></div>

        <HeaderNav inView={headInView} />
      </motion.div>
    </header>
  );
};
