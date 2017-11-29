const Winston = require('winston');
const moment = require('moment');
const fs = require('fs');
const { PATH, FILE } = require('./config/logger');
require('winston-daily-rotate-file');

moment.locale('pt-BR');
Winston.emitErrs = true;

if (!fs.existsSync(PATH)) {
  fs.mkdirSync(PATH);
}

const winston = new Winston.Logger({
  transports: [
    new Winston.transports.DailyRotateFile({
      filename: `${PATH}/${FILE || 'log.log'}`,
      datePattern: 'dd-MM-yyyy.',
      prepend: true,
      prettyPrint: true,
      level: 'info',
      timestamp: () => moment().format('DD/MM/YYYY, h:mm:ss a')
    }),
    new Winston.transports.Console({
      level: 'info',
      handleExceptions: true,
      json: false,
      prettyPrint: true,
      colorize: true,
      timestamp: () => moment().format('DD/MM/YYYY, h:mm:ss a'),
      humanReadableUnhandledException: true
    })
  ],
  exitOnError: false
});

winston.stream = {
  write: (message) => {
    winston.info(message);
  }
};

module.exports = Object.assign(Object.create(winston));
