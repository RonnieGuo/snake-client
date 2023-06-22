const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
//The .on method lets you specify an event name and a function that does something when that event happens.
  conn.on("connect", () => {    // what will happen when connect event happens
// code that does something when the connection is first established
  console.log('Successfully connected to game server');
// Send the name to the server
  conn.write('Name: ROG');
      // conn.write('Move: up');
  conn.on('data', (message) => {
    console.log(message);
  })
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

  module.exports = { connect };