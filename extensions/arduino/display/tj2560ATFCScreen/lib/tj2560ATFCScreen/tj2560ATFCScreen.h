
#include <SoftwareSerial.h>
#include <Arduino.h>

#define ATFC_INT_HEAD   '@'
#define ATFC_FLOAT_HEAD '#'
#define ATFC_STR_HEAD   '$'
#define ATFC_TAIL   '\r'

class ATFCScreen
{
public:
    ATFCScreen(uint8_t rxPin, uint8_t txPin);

    void init();
    void read_data();
    void parse_data();
    void clear_data();
    String head = "";
    String tar = "";
    String var = "";

private:
    SoftwareSerial *ATFCSerial;
    uint32_t timeoutTime = 200;
    //uint8_t rxData[6];
    //unsigned long last_read;
    bool NewLineReceived = false; //前一次数据结束标志
    bool StartBit = false;        //协议开始标志
    String InputString = "";         //用来储存接收到的内容
};
