/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from 'react-icons/ai';

export const Footer = () => {
  return (
    <footer
      style={{
        background:
          'linear-gradient(90deg, rgba(77,10,144,1) 0%, rgba(121,51,190,1) 70%, rgba(139,68,209,1) 100%)',
      }}
      className='flex flex-col w-full p-8 lg:p-16 mt-20 text-white'
    >
      <div className='grid grid-cols-2 justify-items-center gap-4 lg:gap-0 lg:flex justify-evenly lg:h-44'>
        <div className='h-full flex flex-col justify-evenly text-sm'>
          <h3 className='font-semibold mb-2'>Praesentium</h3>
          <div className='h-full flex flex-col'>
            <a href='#' className='hover:opacity-75 my-1'>
              Lusto atque
            </a>
            <a href='#' className='hover:opacity-75 my-1'>
              Err sunt
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
          <h3 className='font-semibold mb-2'>Pariatur</h3>
          <div className='h-full flex flex-col'>
            <a href='#' className='hover:opacity-75 my-1'>
              Cupiditate aliquid
            </a>
            <a href='#' className='hover:opacity-75 my-1'>
              Ullam
            </a>
            <a href='#' className='hover:opacity-75 my-1'>
              Quidem
            </a>
          </div>
        </div>

        <div className='h-full flex flex-col justify-evenly text-sm text-white'>
          <h3 className='font-semibold mb-2'>Recusandae</h3>
          <div className='h-full flex flex-col'>
            <a href='#' className='hover:opacity-75 my-1'>
              Hicestiae
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

      <div className='lg:self-end flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full mt-16'>
        <div className='flex justify-evenly w-full md:w-2/5 lg:w-1/5'>
          <a href='#' className='opacity-60 hover:opacity-100'>
            <AiOutlineLinkedin size={25} />
          </a>

          <a href='#' className='opacity-60 hover:opacity-100'>
            <AiOutlineFacebook size={25} />
          </a>

          <a href='#' className='opacity-60 hover:opacity-100'>
            <AiOutlineInstagram size={25} />
          </a>

          <a href='#' className='opacity-60 hover:opacity-100'>
            <AiOutlineYoutube size={25} />
          </a>
        </div>

        <div className='grid grid-cols-2 justify-items-center lg:flex w-full lg:w-1/2 my-4 lg:my-0 justify-evenly text-xs lg:text-sm'>
          <a href='#' className='my-2 lg:my-0 opacity-60 hover:opacity-100'>
            Terms of Service
          </a>
          <a href='#' className='my-2 lg:my-0 opacity-60 hover:opacity-100'>
            AUP/DMCA
          </a>
          <a href='#' className='my-2 lg:my-0 opacity-60 hover:opacity-100'>
            Privacy Policy
          </a>
          <a href='#' className='my-2 lg:my-0 opacity-60 hover:opacity-100'>
            Cookie Policy
          </a>
        </div>

        <p className='text-sm'>© Company 2021</p>
      </div>
    </footer>
  );
};
