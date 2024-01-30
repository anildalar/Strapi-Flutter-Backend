'use strict';

module.exports = ({ strapi }) => {

  //Every function return something. i.e js object
  return { //We are exporting a function which return a JS obect
      //1. P:V


      //2. Method
      async getWelcomeMessage() {
        //CRUD
        //Read Operttion
        //Every function something i.e String
        const entries = await strapi.entityService.findMany('plugin::students.content-type-student',{
          fields: ['name'],
        });
        console.log(entries)
        return entries;
      },
  }
};
