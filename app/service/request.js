'use strict';

const Service = require('egg').Service;
const CONFIG = {
  HOST: 'http://10.0.0.36:8073',
  FULECOID: 123,
};

class request extends Service {
  async post(url, data) {
    return await this.ctx.curl(apiFilter(url), {
      dataType: 'json',
      method: 'post',
      data: Object.assign(data, { fulecoId: CONFIG.FULECOID }),
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    });

    function apiFilter(api) {
      if (!api) throw new Error('Please input legal api');

      let sendUrl = '';

      if (api.startsWith('http') || api.startsWith('//')) {
        sendUrl = api;
      } else {
        if (api.startsWith('/')) {
          sendUrl = CONFIG.HOST + api;
        } else {
          sendUrl = CONFIG.HOST + '/' + api;
        }
      }

      return sendUrl;
    }
  }
}

module.exports = request;
