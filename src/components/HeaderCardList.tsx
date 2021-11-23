import { motion } from 'framer-motion';

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
  return <div></div>;
};
