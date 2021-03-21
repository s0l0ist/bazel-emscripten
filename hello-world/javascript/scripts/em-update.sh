#!/usr/bin/env bash
set -euo pipefail

# Updates emsdk to the latest version
cd ./submodules/emsdk/ \
&& git pull \
&& cd ../../
