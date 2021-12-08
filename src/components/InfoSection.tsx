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
      maiores at tempore placeat! Quidem excepturi qui ducimus recusandae, 
      suscipit vel aspernatur officiis inventore in voluptates accusantium quod.
      `,
    },
    {
      title: 'Quas accusantium libero',
      icon: '',
      info: `
      Rem eum modi iste laboriosam illum nobis esse ea molestias aut in omnis quaerat
      tenetur praesentium maiores, aperiam quibusdam velit! Provident itaque doloribus
      odio vitae voluptatibus pariatur sapiente quaerat facilis molestias quia.
      Perferendis, porro aliquam cumque aspernatur explicabo est quasi adipisci.
      `,
    },
    {
      title: 'Blanditiis perferendis',
      icon: '',
      info: `
      Mollitia alias cupiditate ipsam blanditiis iure ullam? Quos commodi exercitationem
      Cumque nihil fuga nam quaerat omnis labore dolores unde eum, at fugit accusantium 
      provident consequatur non voluptatem, perferendis repellendus.
      `,
    },
  ];

  return (
    <section className='flex flex-col my-2 px-24 py-8'>
      <h2 className='text-base font-semibold text-purple-600'>Why Company</h2>
      <h3 className='text-4xl font-bold w-3/5 mt-4 mb-8'>
        Vero minus nemo harum sunt itaque delectus
      </h3>

      <div className='flex'>
        {infoItems.map((i) => {
          return (
            <div key={i.title} className='flex flex-col text-sm'>
              <div className='flex'>
                {i.icon}
                <h4 className='font-semibold'>{i.title}</h4>
              </div>
              <p className='text-gray-500'>{i.info}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
