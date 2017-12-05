const exportConfig = require('export-config')

const DynamoConfig = {
  default: {
    URI: 'http://localhost:8000'
  },
  development: {
    URI: process.env.DYNAMO_ADDRESS || 'http://localhost:8000'
  },
  required: ['URI']
}

module.exports = exportConfig(DynamoConfig)
