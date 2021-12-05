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
    <form className='flex items-center'>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='h-14 focus:outline-none focus:border-transparent rounded-md pl-4'
        type='text'
        placeholder='Email Address'
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='h-14 focus:outline-none focus:border-transparent rounded-md pl-4 mx-4'
        type='text'
        placeholder='Password'
      />

      <button
        onClick={(e) => handleForm(e)}
        className='bg-purple-800 hover:bg-purple-700 rounded-md text-white font-bold px-8 py-4'
      >
        Create Account
      </button>
    </form>
  );
};
