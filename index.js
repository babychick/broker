var mosca = require('mosca');
var settings = {
		port : 18833
		}

var server = new mosca.Server(settings);

server.on('ready', () => {
    console.log('Broker is running...');
})