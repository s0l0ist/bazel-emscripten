#include <emscripten/bind.h>

#include "hello-world/cpp/greet.hpp"
#include "hello-world/cpp/localtime.hpp"

using namespace emscripten;
using namespace HelloWorld;

EMSCRIPTEN_BINDINGS(Hello_World) {
    emscripten::class_<Greet>("Greet")
        .constructor<>()
        .class_function("SayHello", &Greet::SayHello);
      
    emscripten::class_<LocalTime>("LocalTime")
        .constructor<>()
        .class_function("Now", &LocalTime::Now);
}