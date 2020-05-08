#include <ctime>
#include <stdio.h>
#include "localtime.hpp"

namespace HelloWorld  {

    void LocalTime::Now() {
        std::time_t result = std::time(nullptr);
        printf("%s", std::asctime(std::localtime(&result)));
    }

} // namespace HelloWorld

