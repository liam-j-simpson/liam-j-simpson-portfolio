export async function seed(knex) {
  await knex('projects').insert([
    {
      id: 1,
      name: 'PAKT',
      date: '05/01/2025 14:00',
      short_description: 'A project for packing gear',
      long_description: 'A reallly long description about this project',
      stack: JSON.stringify(['React', 'Typescript']),
    },
    {
      id: 2,
      name: 'Circa',
      date: '05/01/2023 14:00',
      short_description: 'A website for Circa realestate',
      long_description: 'A reallly long description about this project',
      stack: JSON.stringify(['Webflow']),
    },
  ])
}
