const Library = require(`../dist/wasm/umd`);

(async () => {
  // Wait for the library to initialize
  const HelloWorld = await Library();

  // Prints the current time to the console
  HelloWorld.LocalTime.now();

  // Returns a greeting for us to print
  console.log(HelloWorld.Greet.sayHello());
})();
