import { motion } from 'framer-motion';

const cardVariants = {
  initial: {
    translateY: 0,
  },
  hover: {
    translateY: -10,
    transition: {
      ease: 'linear',
      duration: 0.2,
    },
  },
};

export const HeaderCardList = () => {
  const cards = ['Consectetur', 'Adipisicing', 'Elit', 'Lorem Ipsum'];

  return (
    <>
      {cards.map((c) => (
        <Card name={c} />
      ))}
    </>
  );
};

const Card = (name: { name: string }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial='initial'
      whileHover='hover'
      className='h-96 w-64 p-8 rounded-md shadow-md hover:shadow-2xl bg-white cursor-pointer'
    ></motion.div>
  );
};
