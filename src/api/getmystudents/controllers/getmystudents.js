'use strict';

/**
 * A set of functions called "actions" for `getmystudents`
 */

module.exports = { // { 1 P:V, 2 method..... }
  get: async (ctx, next) => {
    try {
      ctx.body = 'get';
    } catch (err) {
      ctx.body = err;
    }
  },
  create: async (ctx, next) => {
    try {
      console.log(ctx.request.body.name);
                                                    //api::apiFolder.contentType
      const entry = await strapi.entityService.create('api::friend.friend', {
        data: {
          "name": ctx.request.body.name
        },
      });
      ctx.body ="Stored successfully";
    } catch (err) {
      ctx.body = err;
    }
  },
};
