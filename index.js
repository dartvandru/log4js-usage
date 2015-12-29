console.log('index.js');
var logger = require('./modules/logger');
require('./modules/module1');
require('./modules/module2');
require('./modules/module3');
var Module4 = require('./modules/module4');
logger.info('index.js');

var module4 = new Module4(logger);

module4.run();