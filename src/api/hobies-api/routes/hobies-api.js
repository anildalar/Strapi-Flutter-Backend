module.exports = { // {} = Js Object We are export a JS Object
  // [] = array
  //1. P:V [{},{}] //aoo Array of object
  routes: [
    {
      //1. P:V
     method: 'POST',
     path: '/hobies',
     handler: 'hobies-api.create',
     config: {
       policies: [],
       middlewares: [],
     },
     //.2 method
    },
  ],

  //2. Method
};
