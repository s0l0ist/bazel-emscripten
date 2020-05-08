#ifndef LIB_GREET_H_
#define LIB_GREET_H_

#include <string>

namespace HelloWorld {

    class Greet {
        public:
        
        /*
        * Greets the name 
        */
        static std::string SayHello(const std::string &name);
    };

} // namespace HelloWorld

#endif
