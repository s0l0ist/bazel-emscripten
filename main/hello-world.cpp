#include "lib/hello-time.h"
#include "main/hello-greet.h"
#include <iostream>
#include <string>

int main() {
  std::string who = "world";
  std::cout << get_greet(who) << std::endl;
  print_localtime();
  return 0;
}
