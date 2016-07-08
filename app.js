/**
 * app.js
 * This program is a server-side JavaScript program that
 * simulates a Hello web site which runs on port 3333
 * The web site displays the current time of the server.
 */
var http = require('http');
var server = http.createServer(function (request, response) {
    var now = new Date();
    var hour = now.getHours();
    var greetings = "";
    if (hour >= 0 && hour < 12)
        greetings = "Good Morning!";
    else if (hour >= 12 && hour < 17)
        greetings = "Good Afternoon!";
    else
        greetings = "Good Evening!";
    response.write("<!DOCTYPE html><html><head><title>Node.js Greetings</title></head>");
	response.write("<body><h1>" + greetings + "</h1>");
	response.write("<p>Current time is " + now + "</p>");
    response.end();
});
server.listen(process.env.PORT || 5000);
console.log("Server is running at port: " + process.env.PORT);