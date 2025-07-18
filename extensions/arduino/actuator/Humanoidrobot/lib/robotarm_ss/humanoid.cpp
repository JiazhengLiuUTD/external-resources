#include "humanoid.h"

Humanoid::Humanoid()
{
    msg="";
    info="";
    i=0;
}

// void Humanoid::info_recv()
// {
//      while(Serial3.available() == 0){
//     }
//     delay(100);
//     Serial.print("Info Received: ");
//     info="";
//     while (!(Serial3.available() == 0)) {
//         //Serial.print(String(char(Serial3.read())));
//         info+=String(char(Serial3.read()));
//     }
//     //Serial.print(info);
// }

void Humanoid::begin()
{
    Serial3.begin(4800);
    Serial.begin(9600);
    Serial.println("Humanoid start");
    Serial.println("");
    Serial3.write(static_cast<byte>(0));
    delay(100);
    Serial3.write(static_cast<byte>(0));
    Serial.println("Arduino control");
}

void Humanoid::action(int state)
{  
    if (state >= 1 && state <= 21) {
        Serial3.write(static_cast<byte>(state)); // 直接发送状态值对应的字节
    } 
    else {
        Serial.println("Unknown command");       // 错误处理
    }

    Serial.print("Message Sent: ");
    Serial.println((byte)state);
    //info_recv();
    //Serial.print(info);
    //Serial.println("");
}

void Humanoid::head(int ha)
{  
    if (ha >= 16 && ha <= 19) {
        Serial3.write(static_cast<byte>(ha)); // 直接发送状态值对应的字节
    } 
    else {
        Serial.println("Unknown command");       // 错误处理
    }

    Serial.print("Message Sent: ");
    Serial.println((byte)ha);
    //info_recv();
    //Serial.print(info);
    //Serial.println("");
}

void Humanoid::servo(int pos , int ang)
{
    Serial3.write(static_cast<byte>(14));
    delay(100);
    Serial3.write(static_cast<byte>(pos));
    delay(10);
    Serial3.write(static_cast<byte>(ang));
    Serial.print("Message Sent: ");
    Serial.println((byte)pos);
    Serial.println((byte)ang);
}
