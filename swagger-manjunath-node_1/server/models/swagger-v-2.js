
module.exports = function(SwaggerApi) {

/**
 * Add a new pet to the store
 * @param {Pet} body Pet object that needs to be added to the store
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerApi.addPet = function(body, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Invalid input');
  err0.statusCode = 405;
  return cb(err0);
  */ 
}

/**
 * Update an existing pet
 * @param {Pet} body Pet object that needs to be added to the store
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerApi.updatePet = function(body, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Invalid ID supplied');
  err0.statusCode = 400;
  return cb(err0);
  */ 
  /*
  var err1 = new Error('Pet not found');
  err1.statusCode = 404;
  return cb(err1);
  */ 
  /*
  var err2 = new Error('Validation exception');
  err2.statusCode = 405;
  return cb(err2);
  */ 
}

/**
 * Multiple status values can be provided with comma separated strings
 * @param {string[]} status Status values that need to be considered for filter
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerApi.findPetsByStatus = function(status, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Invalid status value');
  err0.statusCode = 400;
  return cb(err0);
  */ 
}

/**
 * Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
 * @param {string[]} tags Tags to filter by
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerApi.findPetsByTags = function(tags, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Invalid tag value');
  err0.statusCode = 400;
  return cb(err0);
  */ 
}

/**
 * Returns a single pet
 * @param {number} petId ID of pet to return
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Pet} result Result object
 */
SwaggerApi.getPetById = function(petId, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Invalid ID supplied');
  err0.statusCode = 400;
  return cb(err0);
  */ 
  /*
  var err1 = new Error('Pet not found');
  err1.statusCode = 404;
  return cb(err1);
  */ 
}

/**
 * Updates a pet in the store with form data
 * @param {number} petId ID of pet that needs to be updated
 * @param {string} name Updated name of the pet
 * @param {string} status Updated status of the pet
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerApi.updatePetWithForm = function(petId, name, status, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Invalid input');
  err0.statusCode = 405;
  return cb(err0);
  */ 
}

/**
 * Deletes a pet
 * @param {string} api_key undefined
 * @param {number} petId Pet id to delete
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerApi.deletePet = function(api_key, petId, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Invalid ID supplied');
  err0.statusCode = 400;
  return cb(err0);
  */ 
  /*
  var err1 = new Error('Pet not found');
  err1.statusCode = 404;
  return cb(err1);
  */ 
}

/**
 * uploads an image
 * @param {number} petId ID of pet to update
 * @param {string} additionalMetadata Additional data to pass to server
 * @param {file} file file to upload
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {ApiResponse} result Result object
 */
SwaggerApi.uploadFile = function(petId, additionalMetadata, file, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}

/**
 * Returns a map of status codes to quantities

 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerApi.getInventory = function(callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}

/**
 * Place an order for a pet
 * @param {Order} body order placed for purchasing the pet
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Order} result Result object
 */
SwaggerApi.placeOrder = function(body, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Invalid Order');
  err0.statusCode = 400;
  return cb(err0);
  */ 
}

/**
 * For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions
 * @param {number} orderId ID of pet that needs to be fetched
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Order} result Result object
 */
SwaggerApi.getOrderById = function(orderId, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Invalid ID supplied');
  err0.statusCode = 400;
  return cb(err0);
  */ 
  /*
  var err1 = new Error('Order not found');
  err1.statusCode = 404;
  return cb(err1);
  */ 
}

/**
 * For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors
 * @param {number} orderId ID of the order that needs to be deleted
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerApi.deleteOrder = function(orderId, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Invalid ID supplied');
  err0.statusCode = 400;
  return cb(err0);
  */ 
  /*
  var err1 = new Error('Order not found');
  err1.statusCode = 404;
  return cb(err1);
  */ 
}

/**
 * This can only be done by the logged in user.
 * @param {User} body Created user object
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerApi.createUser = function(body, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}

/**
 * Creates list of users with given input array
 * @param {any} body List of user object
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerApi.createUsersWithArrayInput = function(body, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}

/**
 * Creates list of users with given input array
 * @param {any} body List of user object
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerApi.createUsersWithListInput = function(body, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}

/**
 * Logs user into the system
 * @param {string} username The user name for login
 * @param {string} password The password for login in clear text
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerApi.loginUser = function(username, password, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Invalid username/password supplied');
  err0.statusCode = 400;
  return cb(err0);
  */ 
}

/**
 * Logs out current logged in user session

 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerApi.logoutUser = function(callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}

/**
 * Get user by user name
 * @param {string} username The name that needs to be fetched. Use user1 for testing. 
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {User} result Result object
 */
SwaggerApi.getUserByName = function(username, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Invalid username supplied');
  err0.statusCode = 400;
  return cb(err0);
  */ 
  /*
  var err1 = new Error('User not found');
  err1.statusCode = 404;
  return cb(err1);
  */ 
}

/**
 * This can only be done by the logged in user.
 * @param {string} username name that need to be updated
 * @param {User} body Updated user object
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerApi.updateUser = function(username, body, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Invalid user supplied');
  err0.statusCode = 400;
  return cb(err0);
  */ 
  /*
  var err1 = new Error('User not found');
  err1.statusCode = 404;
  return cb(err1);
  */ 
}

/**
 * This can only be done by the logged in user.
 * @param {string} username The name that needs to be deleted
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerApi.deleteUser = function(username, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Invalid username supplied');
  err0.statusCode = 400;
  return cb(err0);
  */ 
  /*
  var err1 = new Error('User not found');
  err1.statusCode = 404;
  return cb(err1);
  */ 
}



SwaggerApi.remoteMethod('addPet',
  { isStatic: true,
  consumes: [ 'application/json', 'application/xml' ],
  produces: [ 'application/xml', 'application/json' ],
  accepts: 
   [ { arg: 'body',
       type: 'Pet',
       description: 'Pet object that needs to be added to the store',
       required: true,
       http: { source: 'body' } } ],
  returns: [],
  http: { verb: 'post', path: '/pet' },
  description: '' }
);

SwaggerApi.remoteMethod('updatePet',
  { isStatic: true,
  consumes: [ 'application/json', 'application/xml' ],
  produces: [ 'application/xml', 'application/json' ],
  accepts: 
   [ { arg: 'body',
       type: 'Pet',
       description: 'Pet object that needs to be added to the store',
       required: true,
       http: { source: 'body' } } ],
  returns: [],
  http: { verb: 'put', path: '/pet' },
  description: '' }
);

SwaggerApi.remoteMethod('findPetsByStatus',
  { isStatic: true,
  produces: [ 'application/xml', 'application/json' ],
  accepts: 
   [ { arg: 'status',
       type: [ 'string' ],
       description: 'Status values that need to be considered for filter',
       required: true,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'get', path: '/pet/findByStatus' },
  description: 'Multiple status values can be provided with comma separated strings' }
);

SwaggerApi.remoteMethod('findPetsByTags',
  { isStatic: true,
  produces: [ 'application/xml', 'application/json' ],
  accepts: 
   [ { arg: 'tags',
       type: [ 'string' ],
       description: 'Tags to filter by',
       required: true,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'get', path: '/pet/findByTags' },
  description: 'Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.' }
);

SwaggerApi.remoteMethod('getPetById',
  { isStatic: true,
  produces: [ 'application/xml', 'application/json' ],
  accepts: 
   [ { arg: 'petId',
       type: 'number',
       description: 'ID of pet to return',
       required: true,
       http: { source: 'path' } } ],
  returns: 
   [ { description: 'successful operation',
       type: 'Pet',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/pet/:petId' },
  description: 'Returns a single pet' }
);

SwaggerApi.remoteMethod('updatePetWithForm',
  { isStatic: true,
  consumes: [ 'application/x-www-form-urlencoded' ],
  produces: [ 'application/xml', 'application/json' ],
  accepts: 
   [ { arg: 'petId',
       type: 'number',
       description: 'ID of pet that needs to be updated',
       required: true,
       http: { source: 'path' } },
     { arg: 'name',
       type: 'string',
       description: 'Updated name of the pet',
       required: false,
       http: { source: 'formData' } },
     { arg: 'status',
       type: 'string',
       description: 'Updated status of the pet',
       required: false,
       http: { source: 'formData' } } ],
  returns: [],
  http: { verb: 'post', path: '/pet/:petId' },
  description: '' }
);

SwaggerApi.remoteMethod('deletePet',
  { isStatic: true,
  produces: [ 'application/xml', 'application/json' ],
  accepts: 
   [ { arg: 'api_key',
       type: 'string',
       description: undefined,
       required: false,
       http: { source: 'header' } },
     { arg: 'petId',
       type: 'number',
       description: 'Pet id to delete',
       required: true,
       http: { source: 'path' } } ],
  returns: [],
  http: { verb: 'delete', path: '/pet/:petId' },
  description: '' }
);

SwaggerApi.remoteMethod('uploadFile',
  { isStatic: true,
  consumes: [ 'multipart/form-data' ],
  produces: [ 'application/json' ],
  accepts: 
   [ { arg: 'petId',
       type: 'number',
       description: 'ID of pet to update',
       required: true,
       http: { source: 'path' } },
     { arg: 'additionalMetadata',
       type: 'string',
       description: 'Additional data to pass to server',
       required: false,
       http: { source: 'formData' } },
     { arg: 'file',
       type: 'file',
       description: 'file to upload',
       required: false,
       http: { source: 'formData' } } ],
  returns: 
   [ { description: 'successful operation',
       type: 'ApiResponse',
       arg: 'data',
       root: true } ],
  http: { verb: 'post', path: '/pet/:petId/uploadImage' },
  description: '' }
);

SwaggerApi.remoteMethod('getInventory',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts: [],
  returns: [],
  http: { verb: 'get', path: '/store/inventory' },
  description: 'Returns a map of status codes to quantities' }
);

SwaggerApi.remoteMethod('placeOrder',
  { isStatic: true,
  produces: [ 'application/xml', 'application/json' ],
  accepts: 
   [ { arg: 'body',
       type: 'Order',
       description: 'order placed for purchasing the pet',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { description: 'successful operation',
       type: 'Order',
       arg: 'data',
       root: true } ],
  http: { verb: 'post', path: '/store/order' },
  description: '' }
);

SwaggerApi.remoteMethod('getOrderById',
  { isStatic: true,
  produces: [ 'application/xml', 'application/json' ],
  accepts: 
   [ { arg: 'orderId',
       type: 'number',
       description: 'ID of pet that needs to be fetched',
       required: true,
       http: { source: 'path' } } ],
  returns: 
   [ { description: 'successful operation',
       type: 'Order',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/store/order/:orderId' },
  description: 'For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions' }
);

SwaggerApi.remoteMethod('deleteOrder',
  { isStatic: true,
  produces: [ 'application/xml', 'application/json' ],
  accepts: 
   [ { arg: 'orderId',
       type: 'number',
       description: 'ID of the order that needs to be deleted',
       required: true,
       http: { source: 'path' } } ],
  returns: [],
  http: { verb: 'delete', path: '/store/order/:orderId' },
  description: 'For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors' }
);

SwaggerApi.remoteMethod('createUser',
  { isStatic: true,
  produces: [ 'application/xml', 'application/json' ],
  accepts: 
   [ { arg: 'body',
       type: 'User',
       description: 'Created user object',
       required: true,
       http: { source: 'body' } } ],
  returns: [],
  http: { verb: 'post', path: '/user' },
  description: 'This can only be done by the logged in user.' }
);

SwaggerApi.remoteMethod('createUsersWithArrayInput',
  { isStatic: true,
  produces: [ 'application/xml', 'application/json' ],
  accepts: 
   [ { arg: 'body',
       type: 'any',
       description: 'List of user object',
       required: true,
       http: { source: 'body' } } ],
  returns: [],
  http: { verb: 'post', path: '/user/createWithArray' },
  description: '' }
);

SwaggerApi.remoteMethod('createUsersWithListInput',
  { isStatic: true,
  produces: [ 'application/xml', 'application/json' ],
  accepts: 
   [ { arg: 'body',
       type: 'any',
       description: 'List of user object',
       required: true,
       http: { source: 'body' } } ],
  returns: [],
  http: { verb: 'post', path: '/user/createWithList' },
  description: '' }
);

SwaggerApi.remoteMethod('loginUser',
  { isStatic: true,
  produces: [ 'application/xml', 'application/json' ],
  accepts: 
   [ { arg: 'username',
       type: 'string',
       description: 'The user name for login',
       required: true,
       http: { source: 'query' } },
     { arg: 'password',
       type: 'string',
       description: 'The password for login in clear text',
       required: true,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'get', path: '/user/login' },
  description: '' }
);

SwaggerApi.remoteMethod('logoutUser',
  { isStatic: true,
  produces: [ 'application/xml', 'application/json' ],
  accepts: [],
  returns: [],
  http: { verb: 'get', path: '/user/logout' },
  description: '' }
);

SwaggerApi.remoteMethod('getUserByName',
  { isStatic: true,
  produces: [ 'application/xml', 'application/json' ],
  accepts: 
   [ { arg: 'username',
       type: 'string',
       description: 'The name that needs to be fetched. Use user1 for testing. ',
       required: true,
       http: { source: 'path' } } ],
  returns: 
   [ { description: 'successful operation',
       type: 'User',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/user/:username' },
  description: '' }
);

SwaggerApi.remoteMethod('updateUser',
  { isStatic: true,
  produces: [ 'application/xml', 'application/json' ],
  accepts: 
   [ { arg: 'username',
       type: 'string',
       description: 'name that need to be updated',
       required: true,
       http: { source: 'path' } },
     { arg: 'body',
       type: 'User',
       description: 'Updated user object',
       required: true,
       http: { source: 'body' } } ],
  returns: [],
  http: { verb: 'put', path: '/user/:username' },
  description: 'This can only be done by the logged in user.' }
);

SwaggerApi.remoteMethod('deleteUser',
  { isStatic: true,
  produces: [ 'application/xml', 'application/json' ],
  accepts: 
   [ { arg: 'username',
       type: 'string',
       description: 'The name that needs to be deleted',
       required: true,
       http: { source: 'path' } } ],
  returns: [],
  http: { verb: 'delete', path: '/user/:username' },
  description: 'This can only be done by the logged in user.' }
);

}
