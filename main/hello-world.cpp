#include "lib/hello-time.hpp"
#include "main/hello-greet.hpp"
// #include <iostream>
# include <stdio.h>
#include <string>

int main() {
  std::string who = "world";
  // std::cout << get_greet(who) << std::endl;
  std::string greet = get_greet(who);
  printf("%s\n", greet.c_str());
  print_localtime();
  return 0;
}
