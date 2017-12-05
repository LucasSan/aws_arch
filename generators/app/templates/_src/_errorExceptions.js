const ErrorExceptions = {
  BusinessError,
  InfrastructureError
}

BusinessError.prototype = new Error()
InfrastructureError.prototype = new Error()

function BusinessError (message) {
  this.message = message
}

function InfrastructureError (message) {
  this.message = message
}

module.exports = function factory () {
  return ErrorExceptions
}
