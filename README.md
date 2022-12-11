# Hello World (C++ to WASM) using Bazel with Emscritpen

This repository demonstrates compiling C++ code with Bazel to WebAssembly. This
repo no longer shows the build to pure JS as this led to very large libraries
that were no where near as fast as their WASM counterparts.

Works with the following versions (as of 12/10/2022):

- bazel 5.3.2
- emscripten 3.1.23

### [Link to blog post](https://medium.com/@s0l0ist/c-to-webassembly-using-bazel-and-emscripten-ae797c119bef)

This repository has changed since the time of the article. This approach uses
the [official bazel + emscripten
configuration](https://github.com/emscripten-core/emsdk/tree/main/bazel) which
simplifies the codebase significantly (and it keeps everything in the bazel
ecosystem).

We illustrate how to integrate multiple `cc_library` targets from different cpp
packages to build a JavaScript file containing WASM.

The generated outputs have been configured in 'single file' mode. This means
instead of handling a separate `.wasm` file, the wasm binary is encoded as a
base64 string and is embedded into a JS file along with emscripten's glue code.
The result is a single file that works in almost any environment provided it
supports WebAssembly without the need to host, serve, or initialize a `.wasm`
binary directly. The caveat is that the file size is 33% larger due to the
encoding.

## Requirements

This project assumes you have
[bazel](https://docs.bazel.build/versions/master/install.html). You should
install [bazelisk](https://github.com/bazelbuild/bazelisk).

## Code structure

- [hello-world](hello-world) holds all the sources
- [hello-world/cpp](hello-world/cpp) C++ sources
- [hello-world/javascript](hello-world/javascript) JavaScript sources

## Compiling

First, clone the repository

```
git clone https://github.com/s0l0ist/bazel-emscripten.git
```

Now, you can simply run a script to build the WASM version:

```
npm run build
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

After you have built and bundled the code, you can run the demo:

- `npm run demo` will execut the WASM code

```
npm run demo

> bazel-emscripten@1.0.0 demo
> RUN_DEMO=wasm node ./hello-world/javascript/examples/demo.js

Sat Dec 10 18:56:47 2022
Hello, World!
```
