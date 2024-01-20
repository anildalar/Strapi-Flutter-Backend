'use strict';
const ReqresContentType = require('./reqres-contenttype');
module.exports = {
    'reqresuser': { schema: ReqresContentType }, // should re-use the singularName of the content-type
};
