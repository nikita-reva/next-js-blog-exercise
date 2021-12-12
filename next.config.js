const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'NextDatabaseTestUser',
        mongodb_password: 'TYdXC4PlCKGJ0h96',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'contact-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'NextDatabaseTestUser',
      mongodb_password: 'TYdXC4PlCKGJ0h96',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'contact',
    },
  };
};
