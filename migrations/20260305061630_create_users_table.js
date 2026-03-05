export async function up(knex) {
    const exists = await knex.schema.hasTable('users'); 

    if (exists) {
        await knex.schema.createTable('users');   
    }
  await knex.schema.createTable('users', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable()
    table.string('gender').notNullable();
    table.boolean('deleted').defaultTo(false);
    table.timestamps(true, true);
  })
}

export async function down(knex){
  await knex.schema.dropTableIfExists('users')
}