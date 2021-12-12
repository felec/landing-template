import { motion } from 'framer-motion';

export const Shield = ({ outer, inner }: { outer: {}; inner: {} }) => {
  return (
    <motion.svg
      variants={outer}
      width='150'
      height='225'
      viewBox='0 0 150 225'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        id='shadow'
        d='M21 188.39L75.3775 219.78L129.755 188.39L75.3775 157L21 188.39Z'
        fill='url(#paint0_linear_3_2)'
      />

      <g id='platform'>
        <path
          d='M75.3616 130.952L43.4327 149.39H21V162.342L75.3616 193.732L129.739 162.342V149.39H107.291L75.3616 130.952Z'
          fill='#24285B'
        />
        <path
          opacity='0.22'
          d='M75.3616 130.952L43.4327 149.39H21V162.342L75.3616 193.732L129.739 162.342V149.39H107.291L75.3616 130.952Z'
          fill='white'
        />
        <path
          d='M75.3616 180.78L129.739 149.39L75.3616 118L21 149.39L75.3616 180.78Z'
          fill='#302041'
        />
      </g>

      <motion.g variants={inner} id='shield'>
        <path
          d='M110.112 82.6454C107.517 131.053 74.9611 143.705 74.9611 143.705C38.8185 122.277 39 80.4303 39 80.4303C62.0345 74.2425 75.2091 61.5839 75.6204 61.1685C84.2099 73.6225 110.112 82.6454 110.112 82.6454Z'
          fill='#7F00FF'
        />
        <path
          d='M110.112 82.4528C107.517 130.86 74.9611 143.513 74.9611 143.513C38.8185 122.084 39 80.2377 39 80.2377C62.0466 74.0619 75.2212 61.4214 75.6325 61C84.2099 73.46 110.112 82.4528 110.112 82.4528Z'
          fill='url(#paint1_linear_3_2)'
        />
        <path
          d='M105.908 84.993C103.615 127.658 74.9248 138.812 74.9248 138.812C43.071 119.923 43.2282 83.0427 43.2282 83.0427C63.5346 77.5892 75.1425 66.4294 75.5055 66.0863C83.0667 77.0716 105.908 84.993 105.908 84.993Z'
          fill='#7F00FF'
        />
        <path
          d='M75.5115 66.0803L74.9066 138.812C43.0528 119.923 43.2101 83.0427 43.2101 83.0427C63.5165 77.5892 75.1244 66.4294 75.4873 66.0863L75.5115 66.0803Z'
          fill='url(#paint2_linear_3_2)'
        />
        <path
          d='M74.9248 102.852C78.0283 102.852 80.5443 100.349 80.5443 97.2603C80.5443 94.172 78.0283 91.6684 74.9248 91.6684C71.8212 91.6684 69.3053 94.172 69.3053 97.2603C69.3053 100.349 71.8212 102.852 74.9248 102.852Z'
          fill='#473F47'
        />
        <path
          d='M71.5434 111.207H77.5984L75.8805 102.25H73.6726L71.5434 111.207Z'
          fill='#473F47'
        />
        <path
          opacity='0.18'
          d='M44.7586 95.2137H51.9871V89.995H57.7155'
          stroke='white'
          strokeWidth='1.22794'
          strokeMiterlimit='10'
        />
        <path
          opacity='0.18'
          d='M46.1741 100.806H55.5863V112.194H61.4779'
          stroke='white'
          strokeWidth='1.22794'
          strokeMiterlimit='10'
        />
        <path
          opacity='0.18'
          d='M105.309 91.6684H93.3922V84.9448H82.7521'
          stroke='white'
          strokeWidth='1.22794'
          strokeMiterlimit='10'
        />
        <path
          opacity='0.18'
          d='M103.089 102.852H91.4808V114.692H83.2965'
          stroke='white'
          strokeWidth='1.22794'
          strokeMiterlimit='10'
        />
        <path
          opacity='0.18'
          d='M57.7155 123.691H67.4543V119.14H73.346'
          stroke='white'
          strokeWidth='1.22794'
          strokeMiterlimit='10'
        />
      </motion.g>

      <defs>
        <linearGradient
          id='paint0_linear_3_2'
          x1='46.9284'
          y1='174.296'
          x2='144.404'
          y2='219.954'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#E4E4E4' />
          <stop offset='1' stopColor='#E4E4E4' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_3_2'
          x1='162.108'
          y1='57.0574'
          x2='79.8119'
          y2='100.38'
          gradientUnits='userSpaceOnUse'
        >
          <stop />
          <stop offset='1' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_3_2'
          x1='-1119'
          y1='12423.9'
          x2='6584.37'
          y2='11734.8'
          gradientUnits='userSpaceOnUse'
        >
          <stop />
          <stop offset='1' stopOpacity='0' />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};
