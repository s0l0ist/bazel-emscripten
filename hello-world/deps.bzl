load("//hello-world/javascript/toolchain:cc_toolchain_config.bzl", "emsdk_configure")

def hello_world_deps():
    # Make all files under submodules/emsdk/* visible to the toolchain. The files are
    # available as external/emsdk/emsdk/*
    emsdk_configure(name = "emsdk")
