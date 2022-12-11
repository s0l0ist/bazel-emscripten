#!/usr/bin/env bash
set -euo pipefail

# Build the JS variant
bazelisk build -c opt //hello-world/javascript:hello-world-js