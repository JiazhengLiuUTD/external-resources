#include "robotarm.h"

RobotArm::RobotArm()
{
    msg="";
    info="";
}

void RobotArm::info_recv()
{
     while(Serial3.available() == 0){
    }
    delay(200);
    Serial.print("Info Received: ");
    while (!(Serial3.available() == 0)) {
        Serial.print(String(char(Serial3.read())));
    }
}

void RobotArm::begin()
{
    Serial3.begin(115200);
    Serial.begin(9600);
    msg="$h\r\n";
    Serial3.print(msg);

    Serial.print("Message Sent: ");
    Serial.print(msg);
    info_recv();
    info_recv();
    Serial.println("");
}

void RobotArm::offset(String joint,uint32_t n)
{
    msg=joint+String(n)+"\r\n";
    Serial3.print(msg);

    Serial.print("Message Sent: ");
    Serial.print(msg);
    info_recv();
    Serial.println("");
}

void RobotArm::reset()
{
    msg="M21 G90 G00 X0 Y0 Z0 A0 F2000\r\n";
    //msg="$m\r\n";
    Serial3.print(msg);

    Serial.print("Message Sent: ");
    Serial.print(msg);
    info_recv();
    Serial.println("");
}
void RobotArm::set_speed(uint32_t speed)
{
    msg="F"+String(speed)+"\r\n";
    Serial3.print(msg);

    Serial.print("Message Sent: ");
    Serial.print(msg);
    info_recv();
    Serial.println("");
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
    Serial.print(msg);
    info_recv();
    Serial.println("");
}
void RobotArm::dir_move(String dir, uint32_t n)
{
    msg="M20 G91 G01 ";
    msg+=dir+String(n);
    msg+="\r\n";
    Serial3.print(msg);

    Serial.print("Message Sent: ");
    Serial.print(msg);
    info_recv();
    Serial.println("");
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
    Serial.print(msg);
    info_recv();
    Serial.println("");
}
void RobotArm::axis_move(String joint, int revolve, int n)
{
    msg="M21 G91 G00 ";
    msg+=joint+String(n*revolve);
    msg+="\r\n";
    Serial3.print(msg);

    Serial.print("Message Sent: ");
    Serial.print(msg);
    info_recv();
    Serial.println("");
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
    Serial.print(msg);
    info_recv();
    Serial.println("");
}
void RobotArm::tool_offset(String d,int n)
{
    msg=d+String(n)+"\r\n";
    Serial3.print(msg);

    Serial.print("Message Sent: ");
    Serial.print(msg);
    info_recv();
    Serial.println("");
}
void RobotArm::suction_cup(String state)
{
    msg="M3S";
    msg+=state;
    msg+="\r\n";
    Serial3.print(msg);

    Serial.print("Message Sent: ");
    Serial.print(msg);
    info_recv();
    Serial.println("");
}
