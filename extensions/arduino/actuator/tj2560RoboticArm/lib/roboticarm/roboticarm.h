#include "Arduino.h"

#define MOVEJ "00"
#define MOVEL "01"
//#define JUMP "05"
#define GOTO "90"
#define INCREMENT "91"
#define OPEN "05"
#define CLOSE "03"
#define ON "13"
#define OFF "14"

class RoboticArm
{
public:
    RoboticArm();
    void info_recv();
    void begin();
    void home();
    void reset();
    void status();
    void cartesian_lin(String pos,String move,int x,int y,int z,uint32_t f);
    void dir_move(String dir, uint32_t n,uint32_t f);
    void suction_cup(String state);
    void clamping_jaws(String state);

private:
    String msg="";
    String info="";
};