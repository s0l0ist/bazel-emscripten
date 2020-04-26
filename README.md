# Hello World (C++ to WASM/JS) using Bazel with Emscritpen

This repository demonstrates compiling C++ code with Bazel to either WebAssembly or plain JavaScript usng the lastest Emscripten release.

Specifically, it illustrates how to integrate multiple ```cc_library``` targets from different packages to compile a `main` JavaScript file containing WASM or just pure JS.

This approach uses a git submodule for emscripten and configures it as an external resource for bazel to use. Other methods such as using http_resource or git_repository are possible, but are not as easily configured. PRs welcome!

The generated outputs have been configured in 'single file' mode. This means instead of handling a separate `.wasm` file, the wasm binary is encoded as a base64 string and is embedded into a JS file along with emscripten's glue code. The result is a single file that works in almost any environment provided it supports WebAssembly (the JS variant will always work) without the need to host, serve, or initialize a `.wasm` binary directly. The caveat is that the file size is larger due to the encoding.

## Requirements

This project assumes you have `yarn` installed.
`npm install -g yarn`

## Code structure

- [lib](lib) holds our example library(ies)
- [main](main) holds the main program source
- [src](src) holds some light JavaScript glue code to handle the initialization of the emscripten outputs.
- [examples](examples) holds a JavaScript demo using either the JS or WASM builds
- [scripts](scripts) contain helpers to build and run the example(s)
- [submodules](submodules) holds the emsdk source
- [toolchain](toolchain) contains the configuration for emscripten to work with bazel.

## Compiling

First, clone the repository
```
git clone https://github.com/s0l0ist/bazel-emscripten.git
yarn submodule:update

// or

git clone --recurse-submodules https://github.com/s0l0ist/bazel-emscripten.git
```

Second, you need to set up emscripten using the emsdk:
```
// Updates emscripten tags
yarn em:update

// Install the latest emscripten release and activate it
yarn em:init
```

Now, you can simply run a script to build both the JS and the WASM outputs: 
```
yarn build
```

To build only one variant:
```
yarn build:js
// or
yarn build:wasm
```

To clean the repository:
```
yarn clean
```

## Example

After you have built the code, you can choose to run a variant:
- `yarn demo:js` to run the JS variant
- `yarn demo:wasm` to run the WASM variant


```
yarn demo:js
yarn run v1.22.4
$ RUN_DEMO=js node ./examples/demo.js
Hello world
Sat Apr 25 19:13:20 2020
✨  Done in 0.34s.
```
