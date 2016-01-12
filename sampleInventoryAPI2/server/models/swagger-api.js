
module.exports = function(SwaggerApi) {

/**
 * postInventory

 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Inventory} result Result object
 */
SwaggerApi.postInventory = function(callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}

/**
 * getInventoryInventoryId
 * @param {number} inventoryId inventoryId
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Inventory} result Result object
 */
SwaggerApi.getInventoryInventoryId = function(inventoryId, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('its not okay.. not found');
  err0.statusCode = 404;
  return cb(err0);
  */ 
}



SwaggerApi.remoteMethod('postInventory',
  { isStatic: true,
  consumes: [],
  produces: [ 'application/json' ],
  accepts: [],
  returns: 
   [ { description: 'success',
       type: 'Inventory',
       arg: 'data',
       root: true } ],
  http: { verb: 'post', path: '/inventory' },
  description: undefined }
);

SwaggerApi.remoteMethod('getInventoryInventoryId',
  { isStatic: true,
  consumes: [],
  produces: [ 'application/json' ],
  accepts: 
   [ { arg: 'inventoryId',
       type: 'number',
       description: 'inventoryId',
       required: true,
       http: { source: 'path' } } ],
  returns: 
   [ { description: 'Its all ok..',
       type: 'Inventory',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/inventory/:inventoryId' },
  description: undefined }
);

}
