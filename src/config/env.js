const env = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  mySqlUri:
    process.env.NODE_ENV === 'development'
      ? process.env.MYSQL_LOCAL
      : process.env.MYSQL_PROD,
}

export default env
