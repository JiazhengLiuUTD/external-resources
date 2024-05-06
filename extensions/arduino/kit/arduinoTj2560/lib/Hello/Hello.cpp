#include "Hello.h"

Hello::Hello()
{
    msg="Hello TJBlock!";
}

void Hello::hello_world()
{
    Serial.println(msg);
}