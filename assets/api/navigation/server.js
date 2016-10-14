'use strict';
/**************************************************************************************************
 * This sample demonstrates the most simplistic usage of Swagger Server.
 * It simply creates a new instance of Swagger Server and starts it.
 * All functionality is provided automatically by Swagger Server's mocks.
 **************************************************************************************************/

// Set the DEBUG environment variable to enable debug output
process.env.DEBUG = 'swagger:*';

var swagger  = require('swagger-server'),
    Server   = swagger.Server,
    Resource = swagger.Resource,
	server = new Server();

server.parse('Navigation.yaml');
server.enable('case sensitive routing');

// Start listening on port 8001
server.listen(8001, function() {
  console.log('The Swagger Navigation is now running at http://localhost:8001');
});
