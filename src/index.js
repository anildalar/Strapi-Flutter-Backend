'use strict';

module.exports = { // i am export JSON object {}
  //1 P:V

  //2. Method
  register({ strapi }) {
    console.log("Hello1")
     //Every function may return somethign
  },
  bootstrap({ strapi }) {
    console.log("Hello2")
     //Every function may return somethign
  },
};
