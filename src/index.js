/*
 * Global handle
 */
let library = null

/*
 * Creates the library
 */
const createLibrary = module => {
    library = module
    // Cannot return the module here or else the program
    // will never exit the main thread.
}

/*
 * Attach handler to the emscripten callback
 */
const handleReady = src =>
  new Promise(
    resolve => (src.onRuntimeInitialized = () => resolve(createLibrary(src)))
  )

/**
 * Initalize
 */
const init = async (source) => handleReady(source())

module.exports = init