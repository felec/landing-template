import { Circles } from '../../components/Circles';
import { Gears } from '../../components/Gears';
import { Cubes } from '../../components/Cubes';
import { Triangles } from '../../components/Triangles';

interface InfoItem {
  icon: any;
  info: string;
  title: string;
}

const infoItems: InfoItem[] = [
  {
    title: 'Rem similique vel',
    icon: <Circles />,
    info: `
    Atque quam distinctio architecto amet laudantium vitae, 
    quidem excepturi qui ducimus recusandae, suscipit vel aspernatur
    officiis inventore in voluptates quod.
    `,
  },
  {
    title: 'Quas accusantium libero',
    icon: <Triangles />,
    info: `
    Rem eum modi iste laboriosam illum nobis esse ea molestias aut in omnis quaerat
    odio vitae voluptatibus. Perferendis, porro aliquam cumque aspernatur
    explicabo est.
    `,
  },
  {
    title: 'Blanditiis perferendis',
    icon: <Gears />,
    info: `
    Mollitia alias cupiditate ipsam blanditiis iure ullam? Quos commodi exercitationem
    Fugit accusantium provident consequatur non voluptatem, perferendis.
    `,
  },
  {
    title: 'Temporibus perspiciatis',
    icon: <Cubes />,
    info: `
    Voluptas odit pariatur assumenda eum laboriosam fugit. Soluta quis dignissimos libero nobis. 
    Quos voluptate, eum ut voluptatum magnam.
    `,
  },
];

export const InfoSection = () => {
  return (
    <section className='flex flex-col px-24 mt-20 mb-40'>
      <h2 className='text-base font-semibold text-purple-600'>Why Company</h2>
      <h3 className='text-3xl font-bold mt-4'>
        Vero minus nemo harum sunt itaque delectus
      </h3>

      <div className='flex h-5/6'>
        {infoItems.map((i) => {
          return (
            <div key={i.title} className='flex flex-col text-sm mr-8'>
              <div className='my-8'>{i.icon}</div>
              <div className='flex'>
                <h4 className='font-semibold mb-2'>{i.title}</h4>
              </div>
              <p className='text-gray-500'>{i.info}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
