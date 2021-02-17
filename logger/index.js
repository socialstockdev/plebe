const {createLogger, format, transports} = require('winston');
const {combine, timestamp, label, printf} = format;

const consoleFormat = printf(({level, message, label, timestamp}) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const makeLogger = (name = 'default') => {
  return createLogger({
    transports: [
      new transports.Console({
        format: combine(label({label: name}), timestamp(), format.colorize(), consoleFormat),
      }),
    ],
    exitOnError: false,
  });
};


module.exports = makeLogger;
