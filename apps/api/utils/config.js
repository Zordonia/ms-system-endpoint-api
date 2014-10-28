'use strict';

var env, config;

// When deployed, retreive configurations from environment variables.
env = process.env;
/**
 * Config object for the entire application.
 */
config = {
  MODE: env.MODE || 'development',
  TOKEN: env.TOKEN || 'token',
  ELASTIC_SEARCH_APIS: env.ELASTIC_SEARCH_APIS || [ 'http://localhost:9200' ],
  PORT: env.PORT || 3001,
  QUEUE_URL: env.QUEUE_URL || 'https://sqs.us-west-2.amazonaws.com/036845378506/Mobile_Endpoint_Publication_Filtered',
  NOTIFICATION_URL: env.NOTIFICATION_URL || 'https://sqs.us-west-2.amazonaws.com/036845378506/Mobile_Endpoint_Publication_Filtered',
  AWS_ACCESSKEYID: 'AKIAIIP6TNYSLPJ5I4UA',
  AWS_SECRETACCESSKEY: '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',
  SNS_ARN: env.SNS_ARN || 'arn:aws:sns:us-west-2:036845378506:System_Broker_Endpoint_Notification'
};

// Freeze the object that it cannot be modified during runtime.
module.exports = Object.freeze(config);
