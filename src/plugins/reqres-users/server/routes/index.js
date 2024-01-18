module.exports = [
  {
    method: 'GET',
    path: '/getusers',//http://localhost:1337/reqres-users/getusers

            //controller.method
    handler: 'myController.index',
    config: {
      policies: [],
      auth:false
    },
  },
];
