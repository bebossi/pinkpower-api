module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfjrr1ha6gductk90r60-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'pinkpowerdb_91ep'),
      user: env('DATABASE_USERNAME', 'pinkpoweradmin'),
      password: env('DATABASE_PASSWORD', 'Dsy42rqm4kjkJQFGbfIPMms5iBhR2ZHo'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
