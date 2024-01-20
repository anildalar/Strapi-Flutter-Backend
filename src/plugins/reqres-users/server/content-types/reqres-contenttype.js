
module.exports = {
    kind: 'collectionType',
    collectionName: 'reqresusers',
    info: {
      singularName: 'reqresuser', // kebab-case mandatory
      pluralName: 'reqresusers', // kebab-case mandatory
      displayName: 'ReqResUsers',
      description: 'ReqResUsers',
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
        email: {
            type: 'string'
        },
        fname: {
            type: 'string'
        },
        lname: {
            type: 'string'
        },
        avatar: {
            type: 'string'
        }
    }
  };