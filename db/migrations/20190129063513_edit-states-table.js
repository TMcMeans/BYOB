
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('states', function (table) {
      table.dropColumn('tourism_webite');
      table.string('tourism_website');
    })
  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('states', function (table) {
      table.dropColumn('tourism_website');
      table.string('tourism_webite');
    })
  ])
};
