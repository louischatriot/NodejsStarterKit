var env = process.env.NODE_ENV || 'development'
  , config;

switch(env) {
  case 'development':
    config = {
      env: 'development'
    , svPort: 5555
    , templatesDir: 'templates'
    };
    break;

  case 'production':
    config = {
      env: 'production'
    , svPort: 5555
    , templatesDir: 'templates'
    };
    break;

  case 'test':
    config = {
      env: 'test'
    , svPort: 6666
    , templatesDir: 'templates'
    };
    break;

}


module.exports = config;
