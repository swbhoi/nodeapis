
module.exports = function(SwaggerApi) {

/**
 * Find pet by ID
 * @param {Pet} petId undefined
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerApi.getPet = function(petId, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Error');
  err0.statusCode = 400;
  return cb(err0);
  */ 
}



SwaggerApi.remoteMethod('getPet',
  { isStatic: true,
  consumes: [],
  produces: [ 'application/json' ],
  accepts: 
   [ { arg: 'petId',
       type: 'Pet',
       description: undefined,
       required: 'true',
       http: { source: 'path' } } ],
  returns: [],
  http: { verb: 'get', path: '/pet:petid' },
  description: 'Find pet by ID' }
);

}
