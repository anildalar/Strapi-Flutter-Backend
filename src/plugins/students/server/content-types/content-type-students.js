
module.exports = { //We are exporing a JS object
    //1. p:v
    kind: 'collectionType',
    collectionName: 'students',
    info: {
      singularName: 'content-type-student', // kebab-case mandatory
      pluralName: 'content-type-students', // kebab-case mandatory
      displayName: 'Student',
      description: 'Student ',
    },
    options: {
      draftAndPublish: false,
    },
    pluginOptions: {
      'content-manager': {
        visible: true,
      },
      'content-type-builder': {
        visible: true,
      }
    },
    attributes: {
      name: {
        type: 'string'
      },
    },
    //2. Method
  };