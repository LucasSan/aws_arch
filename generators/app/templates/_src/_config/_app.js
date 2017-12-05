const exportConfig = require('export-config')

const AppConfig = {
  default: {
    PORT: 3002,
    LOG_LEVEL: 'silly'
  },
  development: {
    HOST: 'http://localhost:3002',
    PORT: 3002
  },
  required: ['PORT']
}

module.exports = exportConfig(AppConfig)
