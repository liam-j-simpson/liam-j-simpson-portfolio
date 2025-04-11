import pkg from 'knex'
const { Knex } = pkg

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('projects').del()

  // Inserts seed entries
  await knex('projects').insert([
    {
      id: 1,
      name: 'Circa',
      summary: "A realestate website that's interactive and fun to navigate.",
      description:
        'Circa wanted to communicate a fun and customer focussed approach throu…',

      tags: ['another'],
      url: 'https://www.circarealestate.co.nz/',
      date: '2023-09-01',
      thumbnail:
        'https://res.cloudinary.com/dubbie1ur/image/upload/v1741229675/z0024yn0n33xtq0toqto.jpg ',
      thumbnailId: 'z0024yn0n33xtq0toqto',

      gallery: [
        'https://res.cloudinary.com/dubbie1ur/image/upload/v1742246003/iv3nztbsz2il3mkrkoyd.jpg',
        'https://res.cloudinary.com/dubbie1ur/image/upload/v1742246003/wjnn9rnnyylvp25cwmes.jpg',
        'https://res.cloudinary.com/dubbie1ur/image/upload/v1742246003/nx9eyn39byntlhkoypvd.jpg',
      ],

      galleryId: [
        'iv3nztbsz2il3mkrkoyd',
        'wjnn9rnnyylvp25cwmes',
        'nx9eyn39byntlhkoypvd',
      ],
      repo: null,
      sort: '4',
    },
  ])
}
