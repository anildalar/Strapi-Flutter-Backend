'use strict';

/**
 * A set of functions called "actions" for `hobies-api`
 */

module.exports = {
  create: async (ctx, next) => {
    try {
      console.log(ctx.request.body.hobyname)
      await strapi.services.hobiesservice.create(ctx.request.body)
      /* const entry = await strapi.entityService.create('api::my-hobiy.my-hobiy', {
          data: {
            name: ctx.request.body.hobyname,
          },
      }); */
      ctx.body = 'Stored successfully';
    } catch (err) {
      ctx.body = err;
    }
  }
};
