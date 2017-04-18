
module.exports = function(SwaggerApi) {

/**
 * Account Detail's

 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Account} result Result object
 */
SwaggerApi.getAccount = function(callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Acc not found');
  err0.statusCode = 302;
  return cb(err0);
  */ 
}



SwaggerApi.remoteMethod('getAccount',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts: [],
  returns: 
   [ { description: 'Search Success',
       type: 'Account',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/account' },
  description: 'Account Detail\'s' }
);

}
