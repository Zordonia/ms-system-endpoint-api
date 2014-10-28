'use strict';

var Q, logger, restler, url, config, querystring, _, publisher;

Q = require('q');
logger = require('../../utils/logger').prefix('SIMULATION');
restler = require('restler-q');
url = require('url');
config = require('../../utils/config.js');
querystring = require('querystring');
_ = require('lodash');
publisher = require('../pubsub/publisher.js');

var publishTaskStatus = function (status) {
  logger.debug.write('System endpoint status: ' + JSON.stringify(status));
  publisher.publish(status);
};

var taskStatusFailure = function (error) {
  logger.error.write(error);
  publisher.publish(error);
};

module.exports = {
  simulate: function () {
    logger.debug.write('Simulation started.');
    Q({ message: 'Starting task.' })
    .delay(Math.random() * 10000)
    .then(publishTaskStatus, taskStatusFailure)
    .then(function () { return { message: 'Continuing task.' }; }, taskStatusFailure)
    .delay(Math.random() * 10000)
    .then(publishTaskStatus, taskStatusFailure)
    .then(function () { return { message: 'Task finished.' }; })
    .delay(Math.random() * 10000)
    .then(publishTaskStatus, taskStatusFailure);
  }
};
