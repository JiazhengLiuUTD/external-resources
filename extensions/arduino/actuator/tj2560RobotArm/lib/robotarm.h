#include "Arduino.h"

#define MOVEJ "00"
#define MOVEL "01"
#define JUMP "05"
#define GOTO "90"
#define INCREMENT "91"
#define CW "02"
#define CCW "03"
#define ON "1000"
#define OFF "0"
#define BLOW "500"

class RobotArm
{
public:
    RobotArm();
    void begin();
    void reset();
    void set_speed(uint32_t speed);
    void cartesian_lin(String pos,String move,int x,int y,int z,int a);
    void dir_move(String dir, uint32_t n);
    void axis(String pos,int x,int y,int z,int a);
    void axis_move(String joint, int revolve, uint32_t n);
    void arc_move(String pos,String revolve,int x,int y,int z,int r);
    void tool_offset(int x,int y,int z);
    void suction_cup(String state);
private:
    String msg="";
}