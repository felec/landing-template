import { useInView } from 'react-intersection-observer';

import { HeaderNav } from './HeaderNav';
import { ReactComponent as Logo } from '../assets/company_logo.svg';

export const Header = () => {
  const [headRef, headInView] = useInView({ initialInView: true });

  return (
    <div ref={headRef}>
      <div
        className={`fixed w-full flex items-center justify-evenly py-4
      ${headInView ? '' : 'bg-white shadow-lg transform -translate-y-10'}
      `}
      >
        <div className='flex items-center text-3xl text-white font-light font-mono cursor-pointer'>
          <Logo />
          <h2 className='ml-2'>Company</h2>
        </div>

        <div className='w-20'></div>

        <HeaderNav inView={headInView} />
      </div>
    </div>
  );
};
