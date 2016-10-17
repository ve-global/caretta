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

server.dataStore.save(
  new Resource('/navigation/1', {id: 1, title: 'Settings', link: '/settings', icon: 'zmdi-settings'}),
  new Resource('/navigation/2', {id: 2, title: 'Promocodes', link: '/promocodes', icon: 'zmdi-card-giftcard'}),
  new Resource('/navigation/3', {id: 3, title: 'Panels', link: '/panels', icon: 'zmdi-image', subItems: [{id: 6, title: 'Themes', link: '/themes', icon: ''}, {id: 7, title: 'Instances', link: '/instances', icon: ''}]}),
  new Resource('/navigation/4', {id: 4, title: 'Ads', link: '/ads', icon: 'zmdi-book-image'}),
  new Resource('/navigation/5', {id: 5, title: 'VeContact', link: '/contact', icon: 'zmdi-email-open'})
);

// Start listening on port 8001
server.listen(8001, function() {
  console.log('The Swagger Navigation is now running at http://localhost:8001');
});
