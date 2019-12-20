'use strict';

// had enabled by egg
// exports.static = true;
exports.validate = {
  enable: true,
  package: 'egg-validate',
};

/*exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
};*/

exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};
