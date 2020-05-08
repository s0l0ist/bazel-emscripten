load("//hello-world/javascript/toolchain:cc_toolchain_config.bzl", "emsdk_configure")
load("@rules_pkg//:deps.bzl", "rules_pkg_dependencies")

def hello_world_deps():
    # Make all files under submodules/emsdk/* visible to the toolchain. The files are
    # available as external/emsdk/emsdk/*
    emsdk_configure(name = "emsdk")

    rules_pkg_dependencies()
