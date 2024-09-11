#include "tj2560ATFCScreen.h"

ATFCScreen::ATFCScreen(uint8_t rxPin, uint8_t txPin)
{
    ATFCSerial = new SoftwareSerial(rxPin, txPin);
}

void ATFCScreen::init()
{
    Serial.begin(9600);
    Serial.println("ATFC Screen Start.");
    ATFCSerial->begin(9600);
}

void ATFCScreen::read_data()
{
     if (!ATFCSerial->isListening()) {
        ATFCSerial->listen();
    }
    // Serial.println("readData");
    uint32_t timeout = 0;

    while (1)
    {
        while (ATFCSerial->available())
        {
            char IncomingByte = ATFCSerial->read();
            if (IncomingByte == ATFC_INT_HEAD || IncomingByte == ATFC_FLOAT_HEAD || IncomingByte == ATFC_STR_HEAD)
            {
                StartBit = true;
                InputString = IncomingByte;
            }
            else if (StartBit == true && IncomingByte != ATFC_TAIL)
            {
                InputString += IncomingByte;
            }
            else if (IncomingByte == ATFC_TAIL)
            {
                NewLineReceived = true;
                StartBit = false;
                InputString += IncomingByte;
            }
            else
            {
                Serial.println("Error: Not a valid data.");
                break;
            }
        }
        if (NewLineReceived)
        {
            NewLineReceived=false;

            Serial.print("ATFC:");
            Serial.println(InputString);
            parse_data();
            break;
        }
        delay(1);
        timeout++;
        if (timeout > timeoutTime)
        {
            break;
        }
    }
}

void ATFCScreen::parse_data()
{
    int blank=InputString.indexOf(' ');
    int rtn=InputString.indexOf('\r');
    
    if (blank<rtn && blank>0)
    {
        head=String(InputString.charAt(0));
        tar=InputString.substring(1,blank);
        var=InputString.substring(blank+1,rtn);
        Serial.print("INFO: head:");
        Serial.print(head);
        Serial.print("  tar:");
        Serial.print(tar);
        Serial.print("  var:");
        Serial.print(var);
        Serial.println("");
    }
    else
    {
        Serial.println("Data Error");
    }
}

void ATFCScreen::clear_data()
{
    head = "";
    tar = "";
    var = "";

    NewLineReceived = false;
    StartBit = false;
    InputString = "";
}