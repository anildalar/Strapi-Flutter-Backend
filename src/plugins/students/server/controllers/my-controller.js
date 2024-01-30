'use strict';

module.exports = ({ strapi }) => ({ // We are export a fat arrow function which return a js object
  async index(ctx) {
              //function chainining
    let entry = await strapi.plugin('students').service('myService').getWelcomeMessage();
    ctx.body = {
      data: entry
    }
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
