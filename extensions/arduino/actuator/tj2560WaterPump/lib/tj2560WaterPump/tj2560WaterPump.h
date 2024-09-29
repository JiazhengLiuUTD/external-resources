#ifndef TJ2560WTAERPUMP_H
#define TJ2560WATERPUMP_H

#include "Arduino.h"

class Tj2560WaterPump
{
public:
   Tj2560WaterPump(uint8_t spin);
   void On();
   void Off();
private:
   uint8_t pin; 
};

#endif