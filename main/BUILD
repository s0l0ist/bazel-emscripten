load("@rules_cc//cc:defs.bzl", "cc_binary", "cc_library")

cc_library(
    name = "hello-greet",
    srcs = ["hello-greet.cpp"],
    hdrs = ["hello-greet.hpp"],
)

cc_binary(
    name = "hello-world",
    srcs = ["hello-world.cpp"],
    deps = [
        ":hello-greet",
        "//lib:hello-time",
    ],
)

cc_binary(
    name = "hello-world-js.js",
    srcs = ["hello-world.cpp"],
    linkopts = [
        "--bind",
        "-s WASM=0",
        "-s ALLOW_MEMORY_GROWTH=1",
        "-s ASSERTIONS=0",
        "-s FILESYSTEM=0",
        "-s EXPORT_ES6=0",
        "-s MODULARIZE=1",
        "-s USE_ES6_IMPORT_META=0",
        "-s SINGLE_FILE=1",
        "-s EXIT_RUNTIME=0",
        "--closure 1"
    ],
    deps = [
        ":hello-greet",
        "//lib:hello-time",
    ],
)

cc_binary(
    name = "hello-world-wasm.js",
    srcs = ["hello-world.cpp"],
    linkopts = [
        "--bind",
        "-s WASM=1",
        "-s ALLOW_MEMORY_GROWTH=1",
        "-s ASSERTIONS=0",
        "-s FILESYSTEM=0",
        "-s EXPORT_ES6=0",
        "-s MODULARIZE=1",
        "-s USE_ES6_IMPORT_META=0",
        "-s SINGLE_FILE=1",
        "-s EXIT_RUNTIME=0",
        "--closure 1"
    ],
    deps = [
        ":hello-greet",
        "//lib:hello-time",
    ],
)
