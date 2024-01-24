'use strict';

module.exports = ({ strapi }) => ({ // We are export a fat arrow function which return a js object
  index(ctx) {
              //function chainining
    ctx.body = strapi.plugin('students').service('myService').getWelcomeMessage();
  },
});
