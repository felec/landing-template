import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

import { HeaderNav } from './HeaderNav';
import { ReactComponent as Logo } from '../../assets/svgs/company_logo.svg';

export const Header = () => {
  const anim = useAnimation();
  const [headRef, headInView] = useInView({ initialInView: true });

  useEffect(() => {
    if (headInView) {
      anim.start({
        color: '#fff',
        translateY: 0,
      });
    } else {
      anim.start({
        color: '#000',
        translateY: -36,
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
        style={{
          backgroundColor: headInView ? 'transparent' : '#fff',
          boxShadow: headInView
            ? ''
            : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        }}
        className='fixed w-full px-8 lg:px-16 flex justify-between items-center'
      >
        <div className='block lg:hidden'></div>

        <div className='flex items-center ml-6 lg:ml-0 my-2 font-light font-mono cursor-pointer'>
          <Logo />
          <h2 className='hidden lg:block lg:text-3xl ml-2'>Company</h2>
        </div>

        <HeaderNav inView={headInView} />
      </motion.div>
    </header>
  );
};
