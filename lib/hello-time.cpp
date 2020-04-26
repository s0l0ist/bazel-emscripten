#include "lib/hello-time.hpp"
#include <ctime>
#include <stdio.h>
// #include <iostream>

void print_localtime() {
  std::time_t result = std::time(nullptr);
  // std::cout << std::asctime(std::localtime(&result));
  printf("%s\n", std::asctime(std::localtime(&result)));
}
