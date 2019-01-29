
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('states', function (table) {
      table.increments('id').primary();
      table.string('state');
      table.string('tourism_webite');
      table.string('major_airport');
      table.integer('number_of_music_festivals');

      table.timestamps(true, true);
    })
  ]),

    knex.schema.createTable('festivals', function (table) {
      table.increments('id').primary();
      table.string('festival_name');
      table.string('start_end_dates');
      table.string('image');
      table.string('city');
      table.integer('state_id').unsigned();
      table.foreign('state_id')
        .references('states.id');

      table.timestamps(true, true);
    })
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('festivals'),
    knex.schema.dropTable('states')
  ])
};
