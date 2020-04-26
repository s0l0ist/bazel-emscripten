/*
 * Emscripten output contains this callback (onRuntimeInitialized)
 * which fires when the library is fully initialized.
 * 
 * We're simply converting this into a promise.
 */
const waitUntilReady = src =>
  new Promise(
    resolve => (src.onRuntimeInitialized = resolve)
  )

module.exports = (variant) => {
  const source = require(`../bazel-out/wasm-opt/bin/main/hello-world-${variant}.js`)
  return waitUntilReady(source())
}