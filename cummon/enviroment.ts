export const enviroment = {
    server: {port: process.env.SERVE_PORT || 3000},
    db: {url: process.env.DB_URL || 'mongodb://localhost/meat-api'}
}