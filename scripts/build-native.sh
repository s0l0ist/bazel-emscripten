#!/usr/bin/env bash
set -euo pipefail

# Build the native variant
bazel build -c opt //main:hello-world