'use strict';
const axios = require('axios');
/*
module.export = ({key})=>({
    //1.P:V
    //2. Method
    index(){}
  })

*/

module.exports = ({ strapi }) => {
  return { //We are exporting a function Fat arrow that return a JS object with a method
    async index(ctx) {
        //object.method1().method()2.method3()
        
        try {
          const response = await axios.get('https://reqres.in/api/users');
          console.log(response.data.data);
          ctx.body = response.data.data
        } catch (error) {
          console.error(error);
        }
      //ctx.body = strapi.plugin('reqres-users').service('myService').getWelcomeMessage();
    },
  };
}