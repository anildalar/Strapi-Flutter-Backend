'use strict';

module.exports = ({ strapi }) => ({
  async index(ctx) {
            //Function chaining
            // object.method1(AA).method2(AA).method3()
    ctx.body = await strapi.plugin('gorest-users').service('myService').getWelcomeMessage();
  },
});
