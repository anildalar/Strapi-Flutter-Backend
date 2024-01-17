module.exports = [
  {
    method: 'GET',
    path: '/getgorestuser',//http://localhost:1337/gorest-user/getgorestuser
            //controller.method
    handler: 'myController.index',
    config: {
      auth:false,
      policies: [],
    },
  },
];
