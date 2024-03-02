module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5433),
      database: env('DATABASE_NAME', 'blog_db'),
      user: env('DATABASE_USERNAME', 'asad_blog'),
      password: env('DATABASE_PASSWORD', 'asad_blog'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
