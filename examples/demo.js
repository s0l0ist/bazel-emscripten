// Load the proper build depending on environment
const source = require(`../src/${process.env.RUN_DEMO}.js`)

// Load the initializer
const cpp_main = require('../src')

// Start the app!
;(async() => {
    // Wait for the initializer to complete loading
    // Upon success, thws will immediatly run the C++ main() function
    await cpp_main(source)
})()