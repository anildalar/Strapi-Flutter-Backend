'use strict';

module.exports = ({ strapi }) => ({ // We are export a fat arrow function which return a js object
  index(ctx) {
              //function chainining
    ctx.body = strapi.plugin('students').service('myService').getWelcomeMessage();
  },
  async create(ctx) {
              //function chainining CRUD
    const entry = await strapi.entityService.create('plugin::students.content-type-student', {
      data: {
        name: ctx.request.body.name,
      },
    });
    ctx.body = {
      message:'data Stored Successfuuly',
      data: entry
    }

  },
});
