
module.exports = function(SwaggerApi) {

/**
 * Account Detail'ssssssssssss

 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Account} result Result object
 */
SwaggerApi.getAccountAccountNumber = function(callback) {
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



SwaggerApi.remoteMethod('getAccountAccountNumber',
  { isStatic: true,
  consumes: [],
  produces: [ 'application/json' ],
  accepts: [],
  returns: 
   [ { description: 'Search Success',
       type: 'Account',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/account/:accountNumber' },
  description: 'Account Detail\'ssssssssssss' }
);

}
