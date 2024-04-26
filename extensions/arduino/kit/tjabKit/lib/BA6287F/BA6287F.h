#ifndef BA6287F_h
#define BA6287F_h

#include "Arduino.h"

#define BA6287F_FORWARD   -1
#define BA6287F_BACKWARD  1

/*
Timer0:PIN5和PIN6的PWM输出、delay()、millis()、delayMicroseconds()。
Timer1: PIN9和PIN10的PWM输出、舵机库Servo.h、TimerOne库、使用两个tone()变量时。
Timer2: PIN3和PIN11的PWM输出、无源蜂鸣器的tone()、红外库IRremote.h默认使用Timer2，
*/
class BA6287F
{
public:
   BA6287F(uint8_t pinIN1, uint8_t pinIN2);
   void run(int direction, int speed);
   void stop();
   void lock();
private:
   byte _pinIN1;
   byte _pinIN2; 
};

#endif