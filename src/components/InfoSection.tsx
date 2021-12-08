interface InfoItem {
  icon: any;
  info: string;
  title: string;
}

export const InfoSection = () => {
  const infoItems: InfoItem[] = [
    {
      title: 'Rem similique vel',
      icon: '',
      info: `
      Atque quam distinctio architecto amet laudantium vitae, 
      quidem excepturi qui ducimus recusandae, suscipit vel aspernatur
      officiis inventore in voluptates quod.
      `,
    },
    {
      title: 'Quas accusantium libero',
      icon: '',
      info: `
      Rem eum modi iste laboriosam illum nobis esse ea molestias aut in omnis quaerat
      odio vitae voluptatibus. Perferendis, porro aliquam cumque aspernatur
      explicabo est.
      `,
    },
    {
      title: 'Blanditiis perferendis',
      icon: '',
      info: `
      Mollitia alias cupiditate ipsam blanditiis iure ullam? Quos commodi exercitationem
      Fugit accusantium provident consequatur non voluptatem, perferendis.
      `,
    },
    {
      title: 'Temporibus perspiciatis',
      icon: '',
      info: `
      Voluptas odit pariatur assumenda eum laboriosam fugit. Soluta quis dignissimos libero nobis. 
      Quos voluptate, eum ut voluptatum magnam.
      `,
    },
  ];

  return (
    <section className='flex flex-col px-24 my-20'>
      <h2 className='text-base font-semibold text-purple-600'>Why Company</h2>
      <h3 className='text-3xl font-bold w-3/5 mt-4 mb-16'>
        Vero minus nemo harum sunt itaque delectus
      </h3>

      <div className='flex'>
        {infoItems.map((i) => {
          return (
            <div key={i.title} className='flex flex-col text-sm w-80 mr-8'>
              <div className='flex'>
                {i.icon}
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
