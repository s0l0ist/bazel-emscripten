workspace(
    name = "hello_world",
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "aspect_rules_js",
    sha256 = "ad666b12324bab8bc151772bb2eff9aadace7bfd4d624157c2ac3931860d1c95",
    strip_prefix = "rules_js-1.11.1",
    url = "https://github.com/aspect-build/rules_js/archive/refs/tags/v1.11.1.tar.gz",
)

load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")

rules_js_dependencies()

load("@rules_nodejs//nodejs:repositories.bzl", "DEFAULT_NODE_VERSION", "nodejs_register_toolchains")

nodejs_register_toolchains(
    name = "nodejs",
    node_version = DEFAULT_NODE_VERSION,
)

# Emscripten toolchain
http_archive(
    name = "emsdk",
    # TODO: Remove repo_mapping when emsdk updates to rules_nodejs 5
    repo_mapping = {"@nodejs": "@nodejs_host"},
    sha256 = "a2609fd97580e4e332acbf49b6cc363714982f06cb6970d54c9789df8e91381c",
    strip_prefix = "emsdk-3.1.23/bazel",
    urls = ["https://github.com/emscripten-core/emsdk/archive/refs/tags/3.1.23.tar.gz"],
)

load("@emsdk//:deps.bzl", emsdk_deps = "deps")

emsdk_deps()

load("@emsdk//:emscripten_deps.bzl", emsdk_emscripten_deps = "emscripten_deps")

emsdk_emscripten_deps()