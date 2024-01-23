'use strict';

/**
 * brand controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::brand.brand',({strapi})=>({
    async anil(ctx) {
        ctx.body = "createdResource";
    }
}));
