const { createServer } = require('@lhci/server');
const process = require('process');

console.log('Starting server...');
createServer({
  port: process.env.PORT,
  storage: {
    storageMethod: 'sql',
    sqlDialect: 'postgres',
    sqlConnectionSsl: true,
    // Unfortunately, Heroku free-tier does not have verifiable certificates.
    // See https://help.heroku.com/3DELT3RK/why-can-t-my-third-party-utility-connect-to-heroku-postgres-with-ssl for why.
    sqlDialectOptions: {ssl: {rejectUnauthorized: false}},
    sqlConnectionUrl: process.env.DATABASE_URL,
  },
})
  .then(({ port }) => console.log('Listening on port', port))
  .catch((error) => {
    console.error('Error starting Lighthouse server:', error);
    process.exit(1);
  })