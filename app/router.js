'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.page.index); // 首页
  router.get('/login', controller.page.login); // 登录
};
