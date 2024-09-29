#include "tj2560WaterPump.h"

Tj2560WaterPump::Tj2560WaterPump(uint8_t spin)
{
    pin=spin;
    pinMode(pin,OUTPUT);
    digitalWrite(pin , LOW);
}

void Tj2560WaterPump::Off(){
  digitalWrite(pin, LOW);
}

void Tj2560WaterPump::On(){
  digitalWrite(pin, HIGH);
}
