
module.exports = function(SwaggerApi) {

/**
 * The Products endpoint returns information about the *Uber* products
offered at a given location. The response includes the display name
and other details about each product, and lists the products in the
proper display order.

 * @param {number} latitude Latitude component of location.
 * @param {number} longitude Longitude component of location.
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Error} result Result object
 */
SwaggerApi.getProducts = function(latitude, longitude, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}

/**
 * The Price Estimates endpoint returns an estimated price range
for each product offered at a given location. The price estimate is
provided as a formatted string with the full price range and the localized
currency symbol.<br><br>The response also includes low and high estimates,
and the [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code for
situations requiring currency conversion. When surge is active for a particular
product, its surge_multiplier will be greater than 1, but the price estimate
already factors in this multiplier.

 * @param {number} start_latitude Latitude component of start location.
 * @param {number} start_longitude Longitude component of start location.
 * @param {number} end_latitude Latitude component of end location.
 * @param {number} end_longitude Longitude component of end location.
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Error} result Result object
 */
SwaggerApi.getEstimatesPrice = function(start_latitude, start_longitude, end_latitude, end_longitude, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}

/**
 * The Time Estimates endpoint returns ETAs for all products offered at a given location, with the responses expressed as integers in seconds. We recommend that this endpoint be called every minute to provide the most accurate, up-to-date ETAs.
 * @param {number} start_latitude Latitude component of start location.
 * @param {number} start_longitude Longitude component of start location.
 * @param {string} customer_uuid Unique customer identifier to be used for experience customization.
 * @param {string} product_id Unique identifier representing a specific product for a given latitude & longitude.
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Error} result Result object
 */
SwaggerApi.getEstimatesTime = function(start_latitude, start_longitude, customer_uuid, product_id, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}

/**
 * The User Profile endpoint returns information about the Uber user that has authorized with the application.

 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Error} result Result object
 */
SwaggerApi.getMe = function(callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}

/**
 * The User Activity endpoint returns data about a user's lifetime activity with Uber. The response will include pickup locations and times, dropoff locations and times, the distance of past requests, and information about which products were requested.<br><br>The history array in the response will have a maximum length based on the limit parameter. The response value count may exceed limit, therefore subsequent API requests may be necessary.
 * @param {number} offset Offset the list of returned results by this amount. Default is zero.
 * @param {number} limit Number of items to retrieve. Default is 5, maximum is 100.
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Error} result Result object
 */
SwaggerApi.getHistory = function(offset, limit, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}



SwaggerApi.remoteMethod('getProducts',
  { isStatic: true,
  accepts: 
   [ { arg: 'latitude',
       type: 'number',
       description: 'Latitude component of location.',
       required: true,
       http: { source: 'query' } },
     { arg: 'longitude',
       type: 'number',
       description: 'Longitude component of location.',
       required: true,
       http: { source: 'query' } } ],
  returns: 
   [ { description: 'Unexpected error',
       type: 'Error',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/products' },
  description: 'The Products endpoint returns information about the *Uber* products\noffered at a given location. The response includes the display name\nand other details about each product, and lists the products in the\nproper display order.\n' }
);

SwaggerApi.remoteMethod('getEstimatesPrice',
  { isStatic: true,
  accepts: 
   [ { arg: 'start_latitude',
       type: 'number',
       description: 'Latitude component of start location.',
       required: true,
       http: { source: 'query' } },
     { arg: 'start_longitude',
       type: 'number',
       description: 'Longitude component of start location.',
       required: true,
       http: { source: 'query' } },
     { arg: 'end_latitude',
       type: 'number',
       description: 'Latitude component of end location.',
       required: true,
       http: { source: 'query' } },
     { arg: 'end_longitude',
       type: 'number',
       description: 'Longitude component of end location.',
       required: true,
       http: { source: 'query' } } ],
  returns: 
   [ { description: 'Unexpected error',
       type: 'Error',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/estimates/price' },
  description: 'The Price Estimates endpoint returns an estimated price range\nfor each product offered at a given location. The price estimate is\nprovided as a formatted string with the full price range and the localized\ncurrency symbol.<br><br>The response also includes low and high estimates,\nand the [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code for\nsituations requiring currency conversion. When surge is active for a particular\nproduct, its surge_multiplier will be greater than 1, but the price estimate\nalready factors in this multiplier.\n' }
);

SwaggerApi.remoteMethod('getEstimatesTime',
  { isStatic: true,
  accepts: 
   [ { arg: 'start_latitude',
       type: 'number',
       description: 'Latitude component of start location.',
       required: true,
       http: { source: 'query' } },
     { arg: 'start_longitude',
       type: 'number',
       description: 'Longitude component of start location.',
       required: true,
       http: { source: 'query' } },
     { arg: 'customer_uuid',
       type: 'string',
       description: 'Unique customer identifier to be used for experience customization.',
       required: undefined,
       http: { source: 'query' } },
     { arg: 'product_id',
       type: 'string',
       description: 'Unique identifier representing a specific product for a given latitude & longitude.',
       required: undefined,
       http: { source: 'query' } } ],
  returns: 
   [ { description: 'Unexpected error',
       type: 'Error',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/estimates/time' },
  description: 'The Time Estimates endpoint returns ETAs for all products offered at a given location, with the responses expressed as integers in seconds. We recommend that this endpoint be called every minute to provide the most accurate, up-to-date ETAs.' }
);

SwaggerApi.remoteMethod('getMe',
  { isStatic: true,
  accepts: [],
  returns: 
   [ { description: 'Profile information for a user',
       type: 'Profile',
       arg: 'data',
       root: true },
     { description: 'Unexpected error',
       type: 'Error',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/me' },
  description: 'The User Profile endpoint returns information about the Uber user that has authorized with the application.' }
);

SwaggerApi.remoteMethod('getHistory',
  { isStatic: true,
  accepts: 
   [ { arg: 'offset',
       type: 'number',
       description: 'Offset the list of returned results by this amount. Default is zero.',
       required: undefined,
       http: { source: 'query' } },
     { arg: 'limit',
       type: 'number',
       description: 'Number of items to retrieve. Default is 5, maximum is 100.',
       required: undefined,
       http: { source: 'query' } } ],
  returns: 
   [ { description: 'History information for the given user',
       type: 'Activities',
       arg: 'data',
       root: true },
     { description: 'Unexpected error',
       type: 'Error',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/history' },
  description: 'The User Activity endpoint returns data about a user\'s lifetime activity with Uber. The response will include pickup locations and times, dropoff locations and times, the distance of past requests, and information about which products were requested.<br><br>The history array in the response will have a maximum length based on the limit parameter. The response value count may exceed limit, therefore subsequent API requests may be necessary.' }
);

}
