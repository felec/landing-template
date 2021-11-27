import { motion } from 'framer-motion';

interface Coords {
  x: number;
  y: number;
  city: string;
}

const dotVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.8,
    transition: {
      duration: 0.1,
      ease: 'easeOut',
    },
  },
};

const modalVariants = {
  initial: {
    scale: 0,
    translateX: -10,
  },
  hover: {
    scale: 0.6,
  },
};

export const MapDots = () => {
  const dots: Coords[] = [
    { x: 145, y: 215, city: 'Los Angeles, CA' },
    { x: 205, y: 225, city: 'Austin, TX' },
    { x: 245, y: 170, city: 'Chicago, IL' },
    { x: 270, y: 250, city: 'Miami, FL' },
    { x: 285, y: 195, city: 'New York, NY' },
    { x: 520, y: 140, city: 'London, UK' },
    { x: 535, y: 165, city: 'Paris, FR' },
    { x: 855, y: 325, city: 'Singapore, MY' },
    { x: 1000, y: 445, city: 'Syndey, AU' },
    { x: 970, y: 205, city: 'Tokyo, JP' },
  ];

  return (
    <>
      {dots.map((d, i) => {
        return (
          <motion.div
            initial='initial'
            whileHover='hover'
            variants={dotVariants}
            style={{
              position: 'absolute',
              zIndex: (20 - i).toString(),
              top: d.y,
              left: d.x,
            }}
            className='h-3 w-3 rounded-full bg-purple-500 cursor-pointer'
          >
            <motion.div
              variants={modalVariants}
              className='flex justify-center text-xs min-w-min w-28 border font-bold bg-white shadow-lg p-2 rounded-sm'
            >
              {d.city}
            </motion.div>
          </motion.div>
        );
      })}
    </>
  );
};
