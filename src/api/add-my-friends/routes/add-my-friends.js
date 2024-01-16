module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/add-my-friends',
     handler: 'add-my-friends.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
