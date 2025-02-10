export async function up(knex) {
  return knex.schema.createTable('projects', function (table) {
    table.increments('id')
    table.string('name')
    table.string('date')
    table.string('summary')
    table.text('description')
    table.string('url')
    table.text('tags')
    table.string('thumbnail')
    table.text('gallery')
  })
}

export async function down(knex) {
  return knex.schema.dropTableIfExists('projects')
}
