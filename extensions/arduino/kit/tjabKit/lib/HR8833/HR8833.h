#ifndef HR8833_h
#define HR8833_h

#include "Arduino.h"

#define HR8833_CW   1
#define HR8833_CCW  -1
#define LEFT_MOTOR   0
#define RIGHT_MOTOR  1
class HR8833
{
public:
   HR8833(uint8_t pinIN1, uint8_t pinIN2);
   void run(int motor,int direction,int speed);
   void stop();
   void lock();
   void calculate_speed(int speed,int speed_erro);
   void forward(int motor);
   void backward(int motor);
   void turn_left(int motor);
   void turn_right(int motor);
   void all_stop(int motor);
private:
   byte _pinIN1;
   byte _pinIN2; 
   int _speed_left;
   int _speed_right;
   int _start_speed = 0;
   int _start_direction = 0;
};

#endif