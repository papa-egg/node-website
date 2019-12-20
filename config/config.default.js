'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1536649135768_519';

  // add your config here
  config.middleware = [ 'errorHandler' ];

  config.cluster = {
    listen: {
      path: '',
      port: 8920,
      hostname: '127.0.0.3',
    }
  };

  /*config.mysql = {
    // database configuration
    client: {
      // host
      host: '127.0.0.1',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '123456',
      // database
      database: 'papaegg',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };*/

  config.jwt = {
    secret: '921456',
    getToken(ctx) {
      if (ctx && ctx.cookies && ctx.cookies.get('cookie-token')) {
        return ctx.cookies.get('cookie-token');
      }
      return null;
    },
  };

  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: [
      'http://127.0.0.1:8920',
      'http://localhost:8920'
    ],
  };

  /*config.sequelize = {
    dialect: 'mysql',
    database: 'papaegg',
    host: '127.0.0.1',
    port: '3306',
    username: 'root',
    password: '123456',
    timezone: '+08:00',
  };*/

  config.view = {
    defaultViewEngine: 'ejs',
    mapping: {
      '.ejs': 'ejs',
    },
    root: [
      path.join(appInfo.baseDir, 'app/view'),
    ].join(','),
  };

  return config;
};
