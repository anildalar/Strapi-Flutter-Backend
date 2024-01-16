'use strict';

/**
 * A set of functions called "actions" for `my-custom-api`
 */

module.exports = {
    //1: P:V

    //2. Method
    exampleAction: async (ctx, next) => {
      try {
        ctx.body = 'ok';
      } catch (err) {
        ctx.body = err;
      }
    }
    /* anil:async (a,b)=>{ // a and b are formal

    } */
};
