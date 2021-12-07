import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdFiberNew,
  MdOutlineAddchart,
  MdOutlineAutoStories,
  MdOutlineFileDownloadDone,
} from 'react-icons/md';

import Dash1 from '../assets/images/dash_1.jpg';
import Dash2 from '../assets/images/dash_2.jpg';
import Dash3 from '../assets/images/dash_3.jpg';

interface TabItem {
  title: string;
  icon: any;
  main: string;
  content: string;
}

export const TabsSection = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabsRef, tabsInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const tabItems: TabItem[] = [
    {
      title: 'Provident animi ad',
      main: Dash1,
      icon: <MdOutlineAutoStories size={35} color='#7933bf' />,
      content: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Temporibus dolor velit, qui molestias cum dolore est dicta alias 
    explicabo excepturi quaerat quisquam et quae modi pariatur 
    neque ad doloremque aut.
    `,
    },
    {
      title: 'Ratione porro',
      main: Dash2,
      icon: <MdOutlineFileDownloadDone size={35} color='#7933bf' />,
      content: `
    Repudiandae inventore ad a ducimus. Nesciunt quidem tempore nemo hic illo
    impedit dignissimos distinctio accusantium eveniet nisi, expedita tenetur 
    enim deleniti rem ea unde eligendi, exercitationem soluta. Eius, id.
    `,
    },
    {
      title: 'Inventore sequi',
      main: Dash3,
      icon: <MdOutlineAddchart size={35} color='#7933bf' />,
      content: `
    Eveniet optio quod maxime ratione, quos possimus aliquam ea porro animi
    omnis consectetur veniam molestiae nobis asperiores! 
    Quae accusantium dolor ex libero at minima omnis consequatur possimus minus.
    `,
    },
  ];

  const handleTabClick = (i: number) => setTabIndex(i);

  return (
    <section
      ref={tabsRef}
      style={{ height: '110vh' }}
      className='relative flex flex-col my-20 overflow-hidden'
    >
      <div
        style={{ height: '30rem', width: '30rem' }}
        className='absolute top-40 -right-72 transform rotate-45 bg-purple-700 rounded-md'
      ></div>

      <div className='flex flex-col items-center self-center'>
        <h2 className='flex text-4xl font-bold'>Quasi adipisci</h2>
        <p className='text-2xl font-thin text-gray-500 mt-8 mb-16'>
          Neque eveniet minus cum nobis nisi.
        </p>
      </div>

      <div className='mx-24'>
        <div className='relative flex flex-col my-4'>
          {tabItems.map((t, i) => {
            return (
              <motion.div
                key={t.title}
                onClick={() => handleTabClick(i)}
                className='flex items-center h-24 w-80 my-2 p-4 bg-white border border-gray-200 hover:border-purple-600 rounded-md cursor-pointer'
              >
                <div className='p-1 rounded-md bg-gray-100'>{t.icon}</div>
                <h3 className='text-lg font-medium ml-4'>{t.title}</h3>
              </motion.div>
            );
          })}
        </div>
        {renderTabImages(tabIndex)}
      </div>
    </section>
  );
};

const dashVariants = {
  hidden: {
    opacity: 0,
    translateY: 100,
  },
  selected: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.8,
      ease: 'easeIn',
    },
  },
};

const renderTabImages = (i: number) => {
  return (
    <motion.div initial='hidden' animate='selected'>
      {i === 0 && (
        <motion.div
          variants={dashVariants}
          className='absolute top-36 right-20 border-t shadow-2xl'
        >
          <img src={Dash1} alt='dashboard' />
          <motion.div className='absolute top-1/2 -left-16 flex items-center p-4 border bg-white shadow-md rounded-md'>
            <MdFiberNew size={50} color='#7933BF' />
            <div className='ml-2'>
              <h3 className='text-sm'>Officiis odio</h3>
              <p className='text-xs text-gray-400'>lorem cupiditate tempori</p>
            </div>
          </motion.div>

          <motion.div className='absolute top-1/4 -right-16 flex flex-col justify-evenly h-48 w-48 pl-4 py-4 border text-xs text-gray-500 bg-white shadow-md rounded-md'>
            <h3 className='text-black font-semibold mb-2'>Optio Solutami</h3>
            <div className='flex items-center'>
              <MdCheckBoxOutlineBlank size={16} />
              <p className='ml-2'>Omnis illum </p>
            </div>

            <div className='flex items-center'>
              <MdCheckBox size={16} color='#7933BF' />
              <p className='ml-2'>Adipisicing elit</p>
            </div>

            <div className='flex items-center'>
              <MdCheckBox size={16} color='#7933BF' />
              <p className='ml-2'>Ducimus adipisci porro</p>
            </div>

            <div className='flex items-center'>
              <MdCheckBoxOutlineBlank size={16} />
              <p className='ml-2'>Non eaque corporis</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {i === 1 && (
        <motion.div
          variants={dashVariants}
          className='absolute top-36 right-20 border-t shadow-2xl'
        >
          <img src={Dash2} alt='dashboard' />
        </motion.div>
      )}

      {i === 2 && (
        <motion.div
          variants={dashVariants}
          className='absolute top-36 right-20 border-t shadow-2xl'
        >
          <img src={Dash3} alt='dashboard' />
        </motion.div>
      )}
    </motion.div>
  );
};
