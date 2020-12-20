var mqtt = require('mqtt');
var fs = require('fs');
var settings = {
    mqttServerUrl : "localhost", 
    port : 18833,
    topic : "Solar@Plant"
    }
var client  = mqtt.connect('mqtt://localhost:18833');
client.on('connect', function () {
    setInterval(function() {
        var message = fs.readFileSync('./broker1.json').toString();
        client.publish(settings.topic, message);
    }, 5000);
});