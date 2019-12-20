'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async index() {
    const { ctx, service } = this;

    const data = await service.index.getMsg();

    console.log(data.items.length);

    await ctx.render('/page/index/index.ejs', {
      TITLE: '首页',
      ITEMS: data.items,
    });
  }

  async login() {
    const { ctx } = this;

    await ctx.render('/page/login/login.ejs', {
      TITLE: '登录'
    });
  }
}

module.exports = HomeController;
