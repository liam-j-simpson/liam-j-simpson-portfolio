export async function seed(knex) {
  await knex('projects').del()
}
