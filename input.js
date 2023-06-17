// Stores the active TCP connection object.
let connection;

const handleUserInput = function (key) {
  if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  } else if (key === '1') {
    connection.write("Say: Hello!");
  } else if (key === '2') {
    connection.write("Say: I'm the best!");
  } else if (key === '3') {
    connection.write("Say: I got this one!");
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    handleUserInput(key);
  });
  return stdin;
};

module.exports = { setupInput };