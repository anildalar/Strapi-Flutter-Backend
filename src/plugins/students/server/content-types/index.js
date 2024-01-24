'use strict';
const contentTypeStudent = require('./content-type-students');
module.exports = {
    'content-type-student': { schema: contentTypeStudent }, // should re-use the singularName of the content-type
};
