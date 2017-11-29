const AWS = require('aws-sdk');
const config = require('../config/dynamo');

const { URI } = config;

AWS.config.update({
  region: 'us-east-1',
  endpoint: new AWS.Endpoint(URI)
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

const DynamoAdapter = {
  getState
};

function getState() {
  return dynamodb;
}

module.exports = function factory() {
  return DynamoAdapter;
};
