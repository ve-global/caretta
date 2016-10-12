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

server.parse('Customers.yaml');
server.enable('case sensitive routing');

server.dataStore.save(
  new Resource('/customers/1', {id: 1, name: 'Lassie'}),
  new Resource('/customers/2', {id: 2, name: 'Clifford'}),
  new Resource('/customers/3', {id: 3, name: 'Garfield'}),
  new Resource('/customers/4', {id: 4, name: 'Snoopy'}),
  new Resource('/customers/5', {id: 5, name: 'Hello Kitty'})
);

// Start listening on port 8000
server.listen(8000, function() {
  console.log('The Swagger Customers is now running at http://localhost:8000');
});
