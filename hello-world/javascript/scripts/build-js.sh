#!/usr/bin/env bash
set -euo pipefail

# Build the JS variant
bazel build -c opt //hello-world/javascript:hello-world-js