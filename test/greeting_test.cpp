#include <iostream>
#include <string>
#include "../src/greeting.h"

int main() {
    std::string result = helloUser( "John" );
    std::cout << result << std::endl;
}