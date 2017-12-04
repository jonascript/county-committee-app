'use strict';
const invite = require('./invite');
const edGeometry = require('./edGeometry');
const countyCommittee = require('./county-committee');
const actionLog = require('./action-log');
const glossaryTerm = require('./glossary-term');
//const authentication = require('./authentication');
const user = require('./user');
const page = require('./page');
const mongoose = require('mongoose');

module.exports = function() {
 const app = this;

 mongoose.connect(app.get('mongodb'));
 mongoose.Promise = global.Promise;

 // app.configure(authentication);
 app.configure(user);
 app.configure(page);
 app.configure(countyCommittee);
 app.configure(edGeometry);
 app.configure(invite);
 app.configure(actionLog);
 app.configure(glossaryTerm);

};


