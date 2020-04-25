#!/usr/bin/env bash
set -euo pipefail

# Source emsdk
source ./submodules/emsdk/emsdk_env.sh

# Build the WASM variant
bazel build -c opt //main:hello-world-wasm.js --config=wasm