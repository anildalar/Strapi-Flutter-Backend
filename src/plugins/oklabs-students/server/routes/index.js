module.exports = [
  {
    method: 'GET',
    path: '/getStudent', //localhost:1337/oklabs-students/getStudent
    handler: 'myController.index',
    config: {
      auth: false, // Set auth to false to make the route public
      policies: [],
    }
  },
];
