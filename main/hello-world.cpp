#include "lib/hello-time.hpp"
#include "main/hello-greet.hpp"
#include <iostream>
#include <string>

int main() {
  std::string who = "world";
  std::cout << get_greet(who) << std::endl;
  print_localtime();
  return 0;
}
