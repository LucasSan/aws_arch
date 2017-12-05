const exportConfig = require('export-config')

const LoggerConfig = {
  default: {
    FILE: process.env.PATH_LOG || '<%= name %>.log'
  },
  development: {
    FILE: '<%= name %>.log',
    PATH: process.env.PATH_LOG || `${__dirname}/../../log`
  },
  required: ['FILE', 'PATH']
}

module.exports = exportConfig(LoggerConfig)
