'use strict';

/**
 * A set of functions called "actions" for `my-students`
 */

module.exports = { //JS Object
  //1. P:V


  //2. Method
  exampleAction: async (ctx, next) => { //ctx = context
    try {
      console.log(ctx.request.body.name)
      ctx.body = 'Hello '+ctx.request.body.name;
    } catch (err) {
      ctx.body = err;
    }
  }
};
