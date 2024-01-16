module.exports = {
  routes: [// [{},{},{},{}] is an array of objects
    {
     method: 'GET',
     path: '/getmystudents',
            //'controller.method'
     handler: 'getmystudents.get',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
     method: 'POST',
     path: '/getmystudents',
            //'controller.method'
     handler: 'getmystudents.create',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
