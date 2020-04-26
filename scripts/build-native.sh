#!/usr/bin/env bash
set -euo pipefail

# Build the pure JS variant
bazel build -c opt //main:hello-world