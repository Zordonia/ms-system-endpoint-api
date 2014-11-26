'use strict';

var env, config;

// When deployed, retreive configurations from environment variables.
env = process.env;
/**
 * Config object for the entire application.
 */
config = {
  MODE: env.MODE || 'prod',
  TOKEN: env.TOKEN || 'token',
  ELASTIC_SEARCH_APIS: env.ELASTIC_SEARCH_APIS || [ 'http://localhost:9200' ],
  PORT: env.PORT || 3001,
  QUEUE_URL: env.QUEUE_URL || 'https://sqs.us-west-2.amazonaws.com/036845378506/Mobile_Endpoint_Publication_Filtered_EP1',
  NOTIFICATION_URL: env.NOTIFICATION_URL || 'https://sqs.us-west-2.amazonaws.com/036845378506/Mobile_Endpoint_Publication_Filtered_EP1',
  AWS_ACCESSKEYID: env.AWS_ACCESSKEYID || '',
  AWS_SECRETACCESSKEY: env.AWS_SECRETACCESSKEY || '',
  SNS_ARN: env.SNS_ARN || 'arn:aws:sns:us-west-2:036845378506:System_Broker_Endpoint_Notification',
  POLL_DELAY: 30000,
  ID: 'Test_System_Endpoint_1'
};

// Freeze the object that it cannot be modified during runtime.
module.exports = Object.freeze(config);
