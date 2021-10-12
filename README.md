# Hello World (C++ to WASM/JS) using Bazel with Emscritpen

This repository demonstrates compiling C++ code with Bazel to either WebAssembly or plain JavaScript.

Works with the following versions (as of 10/12/2021):
- bazel 4.2.1
- emscripten 2.0.31

### [Link to blog post](https://medium.com/@s0l0ist/c-to-webassembly-using-bazel-and-emscripten-ae797c119bef)

Specifically, it illustrates how to integrate multiple `cc_library` targets from different packages to compile a JavaScript file containing WASM or just pure JS.

This approach uses the [official bazel + emscripten configuration](https://github.com/emscripten-core/emsdk/tree/main/bazel).

The generated outputs have been configured in 'single file' mode. This means instead of handling a separate `.wasm` file, the wasm binary is encoded as a base64 string and is embedded into a JS file along with emscripten's glue code. The result is a single file that works in almost any environment provided it supports WebAssembly (the JS variant will always work) without the need to host, serve, or initialize a `.wasm` binary directly. The caveat is that the file size is 33% larger due to the encoding.

## Requirements

This project assumes you have [bazel](https://docs.bazel.build/versions/master/install.html)

## Code structure

- [hello-world](hello-world) holds all the sources
- [hello-world/cpp](hello-world/cpp) C++ sources
- [hello-world/javascript](hello-world/javascript) JavaScript sources

## Compiling

First, clone the repository

```
git clone https://github.com/s0l0ist/bazel-emscripten.git
```

Now, you can simply run a script to build both the JS and the WASM outputs:

```
npm run build
```

To build only one variant:

```
npm run build:js
// or
npm run build:wasm
```

To bundle:

```
npm run rollup
```

To clean the repository:

```
npm run clean
```

## Example

After you have built and bundled the code, you can choose to run a variant:

- `npm run demo:js` to run the JS variant
- `npm run demo:wasm` to run the WASM variant

```
npm run demo:wasm

> RUN_DEMO=wasm node ./hello-world/javascript/examples/demo.js

Tue Oct 12 16:18:34 2021
Hello, World!
```
