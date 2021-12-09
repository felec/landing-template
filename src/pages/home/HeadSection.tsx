import { SignUpForm } from './SignUpForm';

export const HeadSection = () => {
  return (
    <section className='flex flex-col items-center mt-48'>
      <h1 className='text-5xl font-bold text-white'>
        Ducimus Consequntur Delectus
      </h1>

      <h2 className='text-2xl font-thin text-gray-300 my-8'>
        Facilis voluptas praesentium doloribus voluptatem totam rerum velit
        dicta maxime.
      </h2>

      <SignUpForm />
    </section>
  );
};
