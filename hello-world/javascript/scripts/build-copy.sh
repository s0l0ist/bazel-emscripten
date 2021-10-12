#!/usr/bin/env bash

# Copy over to the `bin` directory
test -f bazel-bin/hello-world/javascript/hello-world-wasm/hello-world-wasm.js && cp -rf bazel-bin/hello-world/javascript/hello-world-wasm/hello-world-wasm.js hello-world/javascript/bin/
test -f bazel-bin/hello-world/javascript/hello-world-js/hello-world-js.js && cp -rf bazel-bin/hello-world/javascript/hello-world-js/hello-world-js.js hello-world/javascript/bin/

exit 0