#include "robotarm_ss.h"

RobotArm_SS::RobotArm_SS(uint8_t rxPin, uint8_t txPin)
{
    msg="";
    info="";
    robotarmSerial = new SoftwareSerial(rxPin, txPin);
}

void RobotArm_SS::info_recv()
{
     while(robotarmSerial->available() == 0){
    }
    delay(200);
    Serial.print("Info Received: ");
    info="";
    while (!(robotarmSerial->available() == 0)) {
        //Serial.print(String(char(robotarmSerial->read())));
        info+=String(char(robotarmSerial->read()));
    }
    //Serial.print(info);
}

void RobotArm_SS::begin()
{
    robotarmSerial->begin(115200);
    Serial.begin(9600);
    Serial.println("RobotArm start");
    Serial.println("");
}

void RobotArm_SS::home()
{
    msg="$h\r\n";
    robotarmSerial->print(msg);

    Serial.print("Message Sent: ");
    Serial.print(msg);
    info_recv();
    Serial.print(info);
    info_recv();
    Serial.print(info);
    Serial.println("");
}

void RobotArm_SS::offset(String joint,uint32_t n)
{
    msg=joint+String(n)+"\r\n";
    robotarmSerial->print(msg);

    Serial.print("Message Sent: ");
    Serial.print(msg);
    info_recv();
    Serial.print(info);
    Serial.println("");
}

void RobotArm_SS::reset()
{
    msg="M21 G90 G00 X0 Y0 Z0 A0 F2000\r\n";
    //msg="$m\r\n";
    robotarmSerial->print(msg);

    Serial.print("Message Sent: ");
    Serial.print(msg);
    info_recv();
    Serial.print(info);
    Serial.println("");
}

void RobotArm_SS::set_speed(uint32_t speed)
{
    msg="F"+String(speed)+"\r\n";
    robotarmSerial->print(msg);

    Serial.print("Message Sent: ");
    Serial.print(msg);
    info_recv();
    Serial.print(info);
    Serial.println("");
}

void RobotArm_SS::cartesian_lin(String pos,String move,int x,int y,int z,int a)
{
    msg="M20";
    msg+=" G"+pos;
    msg+=" G"+move;
    msg+=" X"+String(x);
    msg+=" Y"+String(y);
    msg+=" Z"+String(z);
    msg+=" A"+String(a);
    msg+="\r\n";
    robotarmSerial->print(msg);

    Serial.print("Message Sent: ");
    Serial.print(msg);
    info_recv();
    Serial.print(info);
    Serial.println("");
}

void RobotArm_SS::dir_move(String dir, uint32_t n)
{
    msg="M20 G91 G01 ";
    msg+=dir+String(n);
    msg+="\r\n";
    robotarmSerial->print(msg);

    Serial.print("Message Sent: ");
    Serial.print(msg);
    info_recv();
    Serial.print(info);
    Serial.println("");
}

void RobotArm_SS::axis(String pos,int x,int y,int z,int a)
{
    msg="M21";
    msg+=" G"+pos;
    msg+=" G00";
    msg+=" X"+String(x);
    msg+=" Y"+String(y);
    msg+=" Z"+String(z);
    msg+=" A"+String(a);
    msg+="\r\n";
    robotarmSerial->print(msg);

    Serial.print("Message Sent: ");
    Serial.print(msg);
    info_recv();
    Serial.print(info);
    Serial.println("");
}

void RobotArm_SS::axis_move(String joint, int revolve, int n)
{
    msg="M21 G91 G00 ";
    msg+=joint+String(n*revolve);
    msg+="\r\n";
    robotarmSerial->print(msg);

    Serial.print("Message Sent: ");
    Serial.print(msg);
    info_recv();
    Serial.print(info);
    Serial.println("");
}

void RobotArm_SS::arc_move(String pos,String revolve,int x,int y,int z,int r)
{
    msg="M20";
    msg+=" G"+pos;
    msg+=" G"+revolve;
    msg+=" X"+String(x);
    msg+=" Y"+String(y);
    msg+=" Z"+String(z);
    msg+=" R"+String(r);
    msg+="\r\n";
    robotarmSerial->print(msg);

    Serial.print("Message Sent: ");
    Serial.print(msg);
    info_recv();
    Serial.print(info);
    Serial.println("");
}

void RobotArm_SS::tool_offset(String d,int n)
{
    msg=d+String(n)+"\r\n";
    robotarmSerial->print(msg);

    Serial.print("Message Sent: ");
    Serial.print(msg);
    info_recv();
    Serial.print(info);
    Serial.println("");
}

void RobotArm_SS::suction_cup(String state)
{
    msg="M3S";
    msg+=state;
    msg+="\r\n";
    robotarmSerial->print(msg);

    Serial.print("Message Sent: ");
    Serial.print(msg);
    info_recv();
    Serial.print(info);
    Serial.println("");
}

void RobotArm_SS::status()
{
    msg="?";
    robotarmSerial->print(msg);

    Serial.print("Message Sent: ");
    Serial.println(msg);

    info_recv();
    Serial.println("");
    //Serial.print(info);
    Serial.println("status: "+info.substring(1,info.indexOf(',')));
    int pos=info.indexOf(':');
    String str =info.substring(pos+1,info.length());
    for (int i=0;i<4;i++){
        pos=str.indexOf(',');
        str=str.substring(pos+1,str.length());
    }
    pos=str.indexOf(',');
    msg="J1: "+str.substring(0,pos);
    str=str.substring(pos+1,str.length());
    pos=str.indexOf(',');
    msg+=", J2: "+str.substring(0,pos);
    str=str.substring(pos+1,str.length());
    pos=str.indexOf(',');
    msg+=", J3: "+str.substring(0,pos);
    str=str.substring(pos+1,str.length());
    Serial.print(msg);
    Serial.println("");

    pos=str.indexOf(':');
    str=str.substring(pos+1,str.length());

    pos=str.indexOf(',');
    msg="X: "+str.substring(0,pos);
    str=str.substring(pos+1,str.length());
    pos=str.indexOf(',');
    msg+=", Y: "+str.substring(0,pos);
    str=str.substring(pos+1,str.length());
    pos=str.indexOf(',');
    msg+=", Z: "+str.substring(0,pos);
    str=str.substring(pos+1,str.length());
    Serial.print(msg);
    Serial.println("");

    Serial.println("");
}