/**
 * @fileOverview Entrypoint of this node app.
 * This server is able to send the current time (hour, minutes, seconds)
 * Supports xml and json
 * @author  Tiago Póvoa
 */
const http = require('http');

const protocol = require('./protocol/simple-protocol');
const currentTime = require('./currentTime.js');


const httpServer = http.createServer((request, response) => {

  const datatype = request.headers.accept;

  if (datatype === 'application/xml') {
    response.writeHead(200, {"Content-Type": "application/xml"});
    response.write(new currentTime().toXML());

  } else if (datatype === 'application/json') {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(new currentTime()));

  } else {
    response.writeHead(400);
  }

  response.end();
});

httpServer.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

httpServer.listen(protocol.PROTOCOL_PORT_TCP, () => {
  console.info(`Listening on port ${protocol.PROTOCOL_PORT_TCP}`);
});
