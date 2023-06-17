const { connect } = require('./client');

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
// the stdin is set up to handle user input, and pressing Ctrl + C will terminate the game by calling 
const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
  process.exit();
  }
};
const stdin = setupInput();
stdin.on("data", handleUserInput);
