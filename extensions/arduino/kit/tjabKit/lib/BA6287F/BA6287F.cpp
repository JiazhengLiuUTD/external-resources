#include "BA6287F.h"

BA6287F::BA6287F( uint8_t pinIN1, uint8_t pinIN2) 
{
  _pinIN1 = pinIN1;
  _pinIN2 = pinIN2;
  pinMode(_pinIN1, OUTPUT);
  pinMode(_pinIN2, OUTPUT);
}
void BA6287F::run(int direction, int speed)
{ 
    //__________修复主板重启电机bug___________________________________________________
  if(_start_direction == 0){	 //第一次赋值
	_start_speed = speed;
	_start_direction = direction;
} 
  if (speed < 0)
    {
      speed = -speed;
      direction = -direction;
    }
  switch (direction)
  {
  case BA6287F_BACKWARD:
    int speed1 = 0;
    speed1 = 255 - speed;
    analogWrite(_pinIN1, speed1); 
    digitalWrite(_pinIN2, HIGH); 
    break;
  case BA6287F_FORWARD:
    analogWrite(_pinIN1, speed);
    digitalWrite(_pinIN2, LOW);
    break;
      
  }
}

void BA6287F::stop()
{
  analogWrite(_pinIN1, 0);
  digitalWrite(_pinIN2, LOW);
 }
void BA6287F::lock()
{
  digitalWrite(_pinIN1, HIGH);
  digitalWrite(_pinIN2, HIGH);
 }