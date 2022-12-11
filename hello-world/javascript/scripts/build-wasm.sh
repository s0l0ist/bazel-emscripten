#!/usr/bin/env bash
set -euo pipefail

# Build the WASM variant
bazelisk build -c opt //hello-world/javascript:hello-world-wasm