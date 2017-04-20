
module.exports = function(SwaggerApi) {

/**
 * Account Details
 * @param {string} account_id account id
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Account} result Result object
 */
SwaggerApi.getAccountDetail = function(account_id, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}



SwaggerApi.remoteMethod('getAccountDetail',
  { isStatic: true,
  consumes: [ 'application/json' ],
  produces: [ 'application/json' ],
  accepts: 
   [ { arg: 'account_id',
       type: 'string',
       description: 'account id',
       required: true,
       http: { source: 'query' } } ],
  returns: 
   [ { description: 'Success Response',
       type: 'Account',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/account' },
  description: 'Account Details' }
);

}
