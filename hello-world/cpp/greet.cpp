#include <string>
#include "greet.hpp"

namespace HelloWorld {

    std::string Greet::SayHello(const std::string &name) {
        return "Hello, " + name + "!";
    }

} // namespace HelloWorld
