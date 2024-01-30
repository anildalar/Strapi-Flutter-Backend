module.exports = [
  {
    method: 'GET',
    path: '/mystudents',//http://localhost:1337/students/mystudents
            //controller.method
    handler: 'myController.index',
    config: {
      policies: [],
      auth:false
    },
  },
  {
    method: 'POST',
    path: '/mystudents',//http://localhost:1337/students/mystudents
            //controller.method
    handler: 'myController.create',
    config: {
      policies: [],
      auth:false
    },
  },
];
