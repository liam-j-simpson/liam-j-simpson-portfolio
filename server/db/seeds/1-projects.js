export async function seed(knex) {
  await knex('projects').insert([
    {
      id: 1,
      name: 'PAKT',
      date: '2025-01-17',
      description: 'A reallly long description about this project',
      tags: JSON.stringify(['React', 'Typescript']),
    },
    {
      id: 2,
      name: 'Circa',
      date: '2025-01-18',
      description: 'A reallly long description about this project',
      tags: JSON.stringify(['Webflow']),
    },
  ])
}
