import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Background from '../assets/tabs_bg.svg';

export const TabsSection = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabItems = [
    { title: 'D', content: '' },
    { title: 'F', content: '' },
    { title: 'E', content: '' },
    { title: 'V', content: '' },
  ];

  const [tabsRef, tabsInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section ref={tabsRef} className='flex flex-col mt-40'>
      <div className='flex flex-col items-center self-center'>
        <h2 className='flex text-4xl font-bold'>Quasi adipisci</h2>
        <p className='text-2xl font-thin text-gray-500 mt-8 mb-16'>
          Neque eveniet minus cum nobis nisi.
        </p>
      </div>

      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className='flex p-16'
      >
        <div className='flex flex-col'>
          {tabItems.map((t) => {
            return (
              <div className='flex items-center h-24 w-80 my-2 p-4 bg-white border border-gray-200 hover:border-purple-600 rounded-md cursor-pointer'>
                {t.title}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
