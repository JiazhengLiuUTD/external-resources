#include "robotarm.h"

RobotArm::RobotArm()
{
    msg="";
}

void RobotArm::begin()
{
    Serial3.begin(115200);
    Serial.begin(9600);
    msg="$h\r\n";
    Serial3.print(msg);

    Serial.print("Message Sent: ");
    Serial.println(msg);
}

void RobotArm::reset()
{
    msg="M21 G90 G00 X0 Y0 Z0 A0 F2000\r\n";
    //msg="$m\r\n";
    Serial3.print(msg);

    Serial.print("Message Sent: ");
    Serial.println(msg);
}
void RobotArm::set_speed(uint32_t speed)
{
    msg="F"+String(speed)+"\r\n";
    Serial3.print(msg);

    Serial.print("Message Sent: ");
    Serial.println(msg);
}
void RobotArm::cartesian_lin(String pos,String move,int x,int y,int z,int a)
{
    msg="M20";
    msg+=" G"+pos;
    msg+=" G"+move;
    msg+=" X"+String(x);
    msg+=" Y"+String(y);
    msg+=" Z"+String(z);
    msg+=" A"+String(a);
    msg+="\r\n";
    Serial3.print(msg);

    Serial.print("Message Sent: ");
    Serial.println(msg);
}
void RobotArm::dir_move(String dir, uint32_t n)
{
    msg="M20 G91 G01 ";
    msg+=dir+String(n);
    msg+="\r\n";
    Serial3.print(msg);

    Serial.print("Message Sent: ");
    Serial.println(msg);
}
void RobotArm::axis(String pos,int x,int y,int z,int a)
{
    msg="M21";
    msg+=" G"+pos;
    msg+=" G00";
    msg+=" X"+String(x);
    msg+=" Y"+String(y);
    msg+=" Z"+String(z);
    msg+=" A"+String(a);
    msg+="\r\n";
    Serial3.print(msg);

    Serial.print("Message Sent: ");
    Serial.println(msg);
}
void RobotArm::axis_move(String joint, int revolve, uint32_t n)
{
    msg="M21 G91 G00 ";
    msg+=joint+String(n*revolve);
    msg+="\r\n";
    Serial3.print(msg);

    Serial.print("Message Sent: ");
    Serial.println(msg);
}
void RobotArm::arc_move(String pos,String revolve,int x,int y,int z,int r)
{
    msg="M20";
    msg+=" G"+pos;
    msg+=" G"+revolve;
    msg+=" X"+String(x);
    msg+=" Y"+String(y);
    msg+=" Z"+String(z);
    msg+=" R"+String(r);
    msg+="\r\n";
    Serial3.print(msg);

    Serial.print("Message Sent: ");
    Serial.println(msg);
}
void RobotArm::tool_offset(int x,int y,int z)
{
    msg="$46="+String(x)+"\r\n";
    msg+="$47="+String(x)+"\r\n";
    msg+="$48="+String(x)+"\r\n";
    Serial3.print(msg);

    Serial.print("Message Sent: ");
    Serial.println(msg);
}
void RobotArm::suction_cup(String state)
{
    msg="M3S";
    msg+=state;
    msg+="\r\n";
    Serial3.print(msg);

    Serial.print("Message Sent: ");
    Serial.println(msg);
}
