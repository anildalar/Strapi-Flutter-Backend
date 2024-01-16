'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('oklabs-students')
      .service('myService')
      .getWelcomeMessage();
  },
});
