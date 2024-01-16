module.exports = {
  //1. P:V
  routes: [
    {
      method: 'POST',
      path: '/my-custom-api',
              //'controller.method'
      handler: 'my-custom-api.exampleAction',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],

  //2. Methodf
};
