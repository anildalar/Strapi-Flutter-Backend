module.exports = { //JS Object
    //1. P:V
    // ...
    'students': {
        enabled: true,
        resolve: './src/plugins/students'
    },
    'gorest-users': {
        //1. P:V,
        enabled: false,
        resolve: './src/plugins/gorest-users'
        //2. Methods
    },

    'reqres-users': {
        enabled: true,
        resolve: './src/plugins/reqres-users'
    },

    // ...
    //2. Methods/Functions Old function/new Style FatArrow
}