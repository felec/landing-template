import { SignUpForm } from './SignUpForm';

export const HeadSection = () => {
  return (
    <section className='flex flex-col items-center text-center lg:text-left px-4 lg:px-0 mt-32 lg:mt-48'>
      <h1 className='text-4xl lg:text-5xl font-bold text-white'>
        Ducimus Consequntur Delectus
      </h1>

      <h2 className='text-base lg:text-2xl font-thin text-gray-300 my-8'>
        Facilis voluptas praesentium doloribus voluptatem totam rerum velit
        dicta maxime.
      </h2>

      <SignUpForm />
    </section>
  );
};
