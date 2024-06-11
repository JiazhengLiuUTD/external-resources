#include "Arduino.h"
#include <SoftwareSerial.h>

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
#define JOINT1 "$154="
#define JOINT2 "$155="
#define JOINT3 "$156="
#define OFFSET_X "$46="
#define OFFSET_Y "$47="
#define OFFSET_Z "$48="

class RobotArm_SS
{
public:
    RobotArm_SS(uint8_t rxPin, uint8_t txPin);
    void info_recv();
    void begin();
    void home();
    void reset();
    void status();
    void offset(String joint,uint32_t n);
    void set_speed(uint32_t speed);
    void cartesian_lin(String pos,String move,int x,int y,int z,int a);
    void dir_move(String dir, uint32_t n);
    void axis(String pos,int x,int y,int z,int a);
    void axis_move(String joint, int revolve, int n);
    void arc_move(String pos,String revolve,int x,int y,int z,int r);
    void tool_offset(String d,int n);
    void suction_cup(String state);
private:
    String msg="";
    String info="";
    SoftwareSerial *robotarmSerial;
};