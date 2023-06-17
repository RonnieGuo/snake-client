// establishes a connection with the game server
  // The conn object that Node returned to you represents the connection that you have with the server.
  // The conn object is full of useful methods and properties that can now be used to interact with the server!
  // You will use the conn object to handle messages from the server.
  const net = require("net");
   const connect = function () {
    const conn = net.createConnection({
      host: "localhost",// IP address here,
      port: 50541,// PORT number here,
    });
  
    //The .on method lets you specify an event name and a function that does something when that event happens.
    conn.on("connect", () => {
      // code that does something when the connection is first established
      console.log('Successfully connected to game server');
      // Send the name to the server
      conn.write('Name: ROG');
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
  
    return conn;
  };

  module.exports = { connect };