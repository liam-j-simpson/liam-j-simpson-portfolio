export async function up(knex) {
  return knex.schema.createTable('projects', function (table) {
    table.increments('id')
    table.string('name')
    table.string('date')
    table.string('short_description')
    table.text('long_description')
    table.text('stack')
  })
}

export async function down(knex) {
  return knex.schema.dropTableIfExists('projects')
}
