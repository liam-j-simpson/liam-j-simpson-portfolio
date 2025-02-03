export async function seed(knex) {
  await knex('projects').insert([
    {
      id: 1,
      name: 'PAKT',
      date: '2025-01-17',
      summary: 'PAKT is for outdoors people',
      description:
        'A common problem for outdoors people is that they love adventure but due to other commitments are time-poor and dont get to enjoy their passions as much as theyd hope.',
      url: 'https://www.pakt.co.nz',
      tags: JSON.stringify(['React', 'Typescript', 'Tailwind']),
      thumbnail: 'uploads/monarch.png',
    },
    {
      id: 2,
      name: 'Circa',
      date: '2025-01-18',
      summary: 'Circas new website',
      description:
        'Circa likes to stand out of the crowd as the agency thats purely focussed on its customers. Using fun imagery and videos of past clients plus colourful grids that representive each properties unique style. This website gives personality to an industry that often lacks it.',
      url: 'https://www.circarealestate.co.nz/',
      tags: JSON.stringify(['Webflow']),
      thumbnail: 'uploads/monarch2.png',
    },
  ])
}
