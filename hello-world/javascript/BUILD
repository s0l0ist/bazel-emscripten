package(default_visibility = ["//visibility:public"])

DEFAULT_EMSCRIPTEN_LINKOPTS = [
    "-flto",
    "--bind",
    "--closure 1",
    "-s ALLOW_MEMORY_GROWTH=1",
    "-s USE_PTHREADS=0",
    "-s ASSERTIONS=0",
    "-s EXPORT_ES6=1",
    "-s MODULARIZE=1",
    "-s USE_ES6_IMPORT_META=0",
    "-s SINGLE_FILE=1"
]

cc_binary(
    name = "hello-world-wasm.js",
    srcs = ["bindings/hello-world.cpp"],
    linkopts = DEFAULT_EMSCRIPTEN_LINKOPTS + [
        "-s WASM=1",
    ],
    deps = [
        "//hello-world/cpp:greet",
        "//hello-world/cpp:localtime",
    ],
)

cc_binary(
    name = "hello-world-js.js",
    srcs = ["bindings/hello-world.cpp"],
    linkopts = DEFAULT_EMSCRIPTEN_LINKOPTS + [
        "-s WASM=0",
    ],
    deps = [
        "//hello-world/cpp:greet",
        "//hello-world/cpp:localtime",
    ],
)
