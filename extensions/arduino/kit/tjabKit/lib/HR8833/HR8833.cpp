#include "HR8833.h"

HR8833::HR8833( uint8_t pinIN1, uint8_t pinIN2) 
{
  _pinIN1 = pinIN1;
  _pinIN2 = pinIN2;
  pinMode(_pinIN1, OUTPUT);
  pinMode(_pinIN2, OUTPUT);
}
void HR8833::run(int motor,int direction,int speed)
{  
    if (speed < 0)
      {
        speed = -speed;
        direction = -direction;
      }
    if (motor == LEFT_MOTOR)
      {
        switch (direction)
        {
        case HR8833_CW:
          analogWrite(_pinIN1, speed);
          digitalWrite(_pinIN2, LOW);
          break;
        case HR8833_CCW:
          int speed1 = 0;
          speed1 = 255 - speed;
          analogWrite(_pinIN1, speed1); 
          digitalWrite(_pinIN2, HIGH); 
          break;      
        }
      }
    else{
        switch (direction)
        {
        case HR8833_CW:
          analogWrite(_pinIN2, speed);
          digitalWrite(_pinIN1, LOW);
          break;
        case HR8833_CCW:
          int speed1 = 0;
          speed1 = 255 - speed;
          analogWrite(_pinIN2, speed1); 
          digitalWrite(_pinIN1, HIGH); 
          break;      
        }

     }    
}
void HR8833::stop()
{
  digitalWrite(_pinIN1, LOW);
  digitalWrite(_pinIN2, LOW);
 }
void HR8833::lock()
{
  digitalWrite(_pinIN1, HIGH);
  digitalWrite(_pinIN2, HIGH);
 }
void HR8833::calculate_speed(int speed,int speed_erro)
{
  _speed_left = speed - speed_erro;
  _speed_right = speed + speed_erro;
  _speed_left = constrain(_speed_left, -255, 255);
  _speed_right= constrain(_speed_right, -255, 255);  
}

void HR8833::forward(int motor)
{ 
  if (motor == LEFT_MOTOR)
    run(LEFT_MOTOR ,HR8833_CCW , _speed_left); //left_motor
  else 
    run(RIGHT_MOTOR ,HR8833_CW , _speed_right); //right_motor
}

void HR8833::backward(int motor)
{  
  if (motor == LEFT_MOTOR)
    run(LEFT_MOTOR ,HR8833_CW , _speed_left); //left_motor
  else 
    run(RIGHT_MOTOR ,HR8833_CCW , _speed_right); //right_motor
}
void HR8833::turn_left(int motor)
{  
  if (motor == LEFT_MOTOR)
    run(LEFT_MOTOR ,HR8833_CCW , _speed_left); //left_motor
  else 
    run(RIGHT_MOTOR ,HR8833_CCW , _speed_right); //right_motor
}
void HR8833::turn_right(int motor)
{  
  if (motor == LEFT_MOTOR)
    run(LEFT_MOTOR ,HR8833_CW , _speed_left); //left_motor
  else 
    run(RIGHT_MOTOR ,HR8833_CW , _speed_right); //right_motor
}
void HR8833::all_stop(int motor)
{
  if (motor == LEFT_MOTOR)
    run(LEFT_MOTOR ,HR8833_CW , 0); //left_motor
  else 
    run(RIGHT_MOTOR ,HR8833_CW , 0); //right_motor
 }

 