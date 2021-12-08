/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from 'react-icons/ai';

export const Footer = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(90deg, rgba(77,10,144,1) 0%, rgba(121,51,190,1) 70%, rgba(139,68,209,1) 100%)',
      }}
      className='flex justify-evenly h-80 w-full p-16 mt-20'
    >
      <div className='h-full flex flex-col items-center justify-evenly text-sm text-white'>
        <h3 className='font-semibold mb-2'>Follow Us!</h3>

        <div className='h-full flex flex-col'>
          <a href='#' className='hover:opacity-75 my-1'>
            <AiOutlineLinkedin size={25} />
          </a>

          <a href='#' className='hover:opacity-75 my-1'>
            <AiOutlineFacebook size={25} />
          </a>

          <a href='#' className='hover:opacity-75 my-1'>
            <AiOutlineInstagram size={25} />
          </a>

          <a href='#' className='hover:opacity-75 my-1'>
            <AiOutlineYoutube size={25} />
          </a>
        </div>
      </div>

      <div className='h-full flex flex-col justify-evenly text-sm text-white'>
        <h3 className='font-semibold mb-2'>Praesentium</h3>
        <div className='h-full flex flex-col'>
          <a href='#' className='hover:opacity-75 my-1'>
            Iusto atque
          </a>
          <a href='#' className='hover:opacity-75 my-1'>
            Error sunt
          </a>
          <a href='#' className='hover:opacity-75 my-1'>
            Facere
          </a>
          <a href='#' className='hover:opacity-75 my-1'>
            Aliquam
          </a>
          <a href='#' className='hover:opacity-75 my-1'>
            Eveniet
          </a>
        </div>
      </div>

      <div className='h-full flex flex-col justify-evenly text-sm text-white'>
        <h3 className='font-semibold mb-2'>Recusandae</h3>
        <div className='h-full flex flex-col'>
          <a href='#' className='hover:opacity-75 my-1'>
            Molestiae hic
          </a>
          <a href='#' className='hover:opacity-75 my-1'>
            Suscipit
          </a>
          <a href='#' className='hover:opacity-75 my-1'>
            Harem quos
          </a>
          <a href='#' className='hover:opacity-75 my-1'>
            Numquam
          </a>
          <a href='#' className='hover:opacity-75 my-1'>
            Automnis
          </a>
        </div>
      </div>

      <div className='h-full flex flex-col text-sm text-white'>
        <h3 className='font-semibold mb-2'>Similique</h3>
        <div className='h-full flex flex-col'>
          <a href='#' className='hover:opacity-75 my-1'>
            Doloremque
          </a>
          <a href='#' className='hover:opacity-75 my-1'>
            Fugiat
          </a>
          <a href='#' className='hover:opacity-75 my-1'>
            Corporis
          </a>
          <a href='#' className='hover:opacity-75 my-1'>
            Inventore
          </a>
        </div>
      </div>
    </div>
  );
};
