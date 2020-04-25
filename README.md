# Hello World (C++, Bazel, Emscripten)

This repository demonstrates compiling C++ code with Bazel to either WebAssembly or plain JavaScript usng the lastest Emscripten release.

Specifically, it illustrates how to integrate multiple ```cc_library``` targets from different packages to compile a `main` binary executable. The executable is the generated WASM or JS.

## Code structure

- [lib](lib) holds our example library(ies)
- [main](main) holds the main program source
- [src](src) holds some light JavaScript glue code to handle the initialization of the emscripten outputs.
- [examples](examples) holds a JavaScript demo using either the JS or WASM builds
- [scripts](scripts) contain helpers to build and run the example(s)
- [submodules](submodules) holds the emsdk source
- [toolchain](toolchain) contains the configuration for emscripten to work with bazel.

## Compiling

First, you need to set up emscripten using the emsdk:
```
// Updates emscripten tags
yarn em:update
// Install the latest emscripten release and makes it active
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