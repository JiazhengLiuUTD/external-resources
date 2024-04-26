/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.Tj2560ColorSensor_Read = function (block) {
        const port = block.getFieldValue('PORT');
        const tcs_time = block.getFieldValue('TIME');
        const tcs_gain = block.getFieldValue('GAIN');
        Blockly.Arduino.includes_.tj2560ColorSensor_Read = `#include <Wire.h>\n#include <Adafruit_TCS34725.h>`;
        Blockly.Arduino.setups_.tj2560ColorSensor_Read = `tcs.begin();`;
        Blockly.Arduino.definitions_[`tj2560ColorSensor_Read${port}`]= `Adafruit_TCS34725 tcs = Adafruit_TCS34725( ${tcs_time}, ${tcs_gain});
uint16_t r = 0;
uint16_t g = 0;
uint16_t b = 0;
uint16_t c = 0;
`;
        return `tcs.getRawData(&r, &g, &b, &c);\n`;
    };
    Blockly.Arduino.Tj2560ColorSensor_Green = function (block) {
        return [`g`, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.Tj2560ColorSensor_Red = function (block) {
        return [`r`, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.Tj2560ColorSensor_Blue = function (block) {
        return [`b`, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.Tj2560ColorSensor_Clear = function (block) {
        return [`c`, Blockly.Arduino.ORDER_ATOMIC];
    }; 
    return Blockly;
}

exports = addGenerator;
