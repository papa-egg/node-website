'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getMsg() {
    const { service: { request } } = this;

    return {
      items: [
        {
          title: '111',
        },
        {
          title: '222',
        },
        {
          title: '333',
        }
      ]
    };
    // const { data } = await request.post('/xxxxxx');

    // return data.data;
  }
}

module.exports = UserService;
