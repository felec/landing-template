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

export const MapDots = () => {
  const dots: Coords[] = [
    { x: 440, y: 120, city: 'Los Angeles, CA' },
    { x: 154, y: 80, city: 'Austin, TX' },
    { x: 154, y: 80, city: 'Chicago, IL' },
    { x: 154, y: 80, city: 'Miami, FL' },
    { x: 154, y: 80, city: 'New York, NY' },
    { x: 154, y: 80, city: 'London, GB' },
    { x: 154, y: 80, city: 'Paris, FR' },
    { x: 154, y: 80, city: 'Singapore, MY' },
    { x: 154, y: 80, city: 'Syndey, AU' },
    { x: 154, y: 80, city: 'Tokyo, JP' },
  ];

  return (
    <>
      {dots.map((d) => {
        return (
          <motion.div
            initial='initial'
            whileHover='hover'
            variants={dotVariants}
            style={{
              position: 'absolute',
              top: d.y,
              left: d.x,
            }}
            className='h-3 w-3 rounded-full bg-purple-500 z-20 cursor-pointer'
          ></motion.div>
        );
      })}
    </>
  );
};
