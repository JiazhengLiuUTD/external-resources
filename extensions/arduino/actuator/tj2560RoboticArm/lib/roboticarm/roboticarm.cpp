#include "roboticarm.h"

RoboticArm::RoboticArm()
{
    msg="";
    info="";
}

void RoboticArm::info_recv()
{
     while(Serial3.available() == 0){
    }
    delay(100);
    Serial.print("Info Received: ");
    info="";
    while (!(Serial3.available() == 0)) {
        //Serial.print(String(char(Serial3.read())));
        info+=String(char(Serial3.read()));
    }
    //Serial.print(info);
}

void RoboticArm::begin()
{
    Serial3.begin(115200);
    Serial.begin(9600);
    Serial.println("RoboticArm start");
    Serial.println("");
}

void RoboticArm::home()
{
    msg="G28";
    Serial3.println(msg);

    Serial.print("Message Sent: ");
    Serial.println(msg);
    info_recv();
    //Serial.print(info);
    //info_recv();
    Serial.print(info);
    Serial.println("");
}
void RoboticArm::reset()
{
    msg="G90\r\nG0 X0 Y170 Z140 F60";
    //msg="$m\r\n";
    Serial3.println(msg);

    Serial.print("Message Sent: ");
    Serial.println(msg);
    info_recv();
    Serial.print(info);
    Serial.println("");
}
void RoboticArm::cartesian_lin(String pos,String move,int x,int y,int z,uint32_t f)
{
    msg=" G"+pos;
    //msg+=" G"+move;
    msg+="\r\nG1";
    msg+=" X"+String(x);
    msg+=" Y"+String(y);
    msg+=" Z"+String(z);
    msg+=" F"+String(f);
    Serial3.println(msg);

    Serial.print("Message Sent: ");
    Serial.println(msg);
    info_recv();
    Serial.print(info);
    Serial.println("");
}

void RoboticArm::dir_move(String dir, uint32_t n,uint32_t f)
{
    msg="G91\r\nG1 ";
    msg+=dir+String(n);
    msg+=" F"+String(f);
    Serial3.println(msg);

    Serial.print("Message Sent: ");
    Serial.println(msg);
    info_recv();
    Serial.print(info);
    Serial.println("");
}
void RoboticArm::suction_cup(String state)
{
    msg="M";
    msg+=state;
    Serial3.println(msg);

    Serial.print("Message Sent: ");
    Serial.println(msg);
    info_recv();
    Serial.print(info);
    Serial.println("");
}

void RoboticArm::clamping_jaws(String state)
{
    msg="M";
    msg+=state;
    Serial3.println(msg);

    Serial.print("Message Sent: ");
    Serial.println(msg);
    info_recv();
    Serial.print(info);
    Serial.println("");
}

void RoboticArm::status()
{
    msg="M114";
    Serial3.println(msg);

    Serial.print("Message Sent: ");
    Serial.println(msg);

    info_recv();
    Serial.print(info);
    Serial.println("");
}