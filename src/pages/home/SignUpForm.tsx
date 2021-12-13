import { useState, MouseEvent } from 'react';

export const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForm = (e: MouseEvent) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };

  return (
    <form className='flex flex-col md:flex-row items-center bg-white md:bg-transparent px-4 py-8 mt-16 md:mt-12 lg:mt-0 rounded-md md:rounded-none shadow-md md:shadow-none'>
      <h3 className='md:hidden text-xl font-bold mb-8'>Get Started!</h3>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='h-14 focus:outline-none focus:border-transparent border md:border-0 rounded-md pl-4'
        type='text'
        placeholder='Email Address'
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='h-14 focus:outline-none focus:border-transparent border md:border-0 rounded-md pl-4 mx-4 my-4 md:my-0'
        type='text'
        placeholder='Password'
      />

      <button
        onClick={(e) => handleForm(e)}
        className='h-14 bg-purple-800 hover:bg-purple-700 rounded-md text-white font-bold px-8'
      >
        Create Account
      </button>
    </form>
  );
};
