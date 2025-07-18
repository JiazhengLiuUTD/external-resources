#include "L298N.h"

L298N::L298N(uint8_t pinEnable, uint8_t pinIN1, uint8_t pinIN2)
{
  _pinEnable = pinEnable;
  _pinIN1 = pinIN1;
  _pinIN2 = pinIN2;

  pinMode(_pinEnable, OUTPUT);
  pinMode(_pinIN1, OUTPUT);
  pinMode(_pinIN2, OUTPUT);
}

void L298N::run(int direction, int speed)
{
  //__________修复主板重启电机bug___________________________________________________
  if(_start_direction == 0){	 //第一次赋值
	_start_speed = speed;
	_start_direction = direction;
}
 if (_start_direction != direction)  //前后或者后前
 {
   if (_start_speed > 0 && speed > 0) { //正正
      if (_start_speed + speed > 400) {
        this->stop();
        delay(50);
      }
    } else if (_start_speed < 0 && speed < 0) { //负负
      if (-_start_speed - speed > 400) {
        this->stop();
        delay(50);
      }
    }
  }
  else {                                //前前或者后后
    if (_start_speed > 0 && speed < 0) {  //速度参数不同；正负
      if (_start_speed - speed > 400) {
        this->stop();
        delay(50);
      }
    } else if (_start_speed < 0 && speed > 0) {  //速度参数不同；负正
      if (speed - _start_speed > 400) {
        this->stop();
        delay(50);
      }
    }
  }	
 _start_speed = speed;
 _start_direction = direction;
  //____________________________________________________________
  
  if (speed <= 0)
  {
    speed = -speed;
    direction = -direction;
  }
  switch (direction)
  {
  case L298N_BACKWARD:
    digitalWrite(_pinIN1, LOW);
    digitalWrite(_pinIN2, HIGH);

    analogWrite(_pinEnable, speed);
    break;
  case L298N_FORWARD:
    digitalWrite(_pinIN1, HIGH);
    digitalWrite(_pinIN2, LOW);

    analogWrite(_pinEnable, speed);
    break;
  }

}

void L298N::stop()
{
  digitalWrite(_pinIN1, LOW);
  digitalWrite(_pinIN2, LOW);

  analogWrite(_pinEnable, 255);
}
