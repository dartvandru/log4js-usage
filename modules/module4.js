
var logger;

function Module4(logger) {
  this.logger = logger;
}

Module4.prototype.run = function () {
  var error = new Error('100500');
  this.logger.error(error);
};



module.exports = Module4;