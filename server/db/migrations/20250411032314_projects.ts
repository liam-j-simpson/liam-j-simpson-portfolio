import pkg from 'knex'
const { Knex } = pkg

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('projects', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('summary')
    table.string('description')
    table.specificType('tags', 'text[]')
    table.string('url')
    table.string('date')
    table.string('thumbnail')
    table.string('thumbnailId')
    table.specificType('gallery', 'text[]')
    table.specificType('galleryId', 'text[]')
    table.string('repo')
    table.string('sort')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('projects')
}
