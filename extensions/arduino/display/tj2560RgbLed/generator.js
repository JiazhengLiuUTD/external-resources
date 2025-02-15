/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    let tj2560RgbLed_port = null ;
    Blockly.Arduino.tj2560RgbLed_setPixelColor = function (block) {
        const port = block.getFieldValue('PORT');
        tj2560RgbLed_port = port;
        const colour = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');
        Blockly.Arduino.includes_.tj2560RgbLed_setPixelColor = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;
        Blockly.Arduino.definitions_[`tj2560RgbLed_setPixelColor_${port}`] = `Adafruit_NeoPixel ledStrip_${port}(1, pinMap[${port}][S5], NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_[`tj2560RgbLed_setPixelColor_${port}`] = `ledStrip_${port}.begin();`;

        return `ledStrip_${port}.setPixelColor(0, ${colour});\nledStrip_${port}.show();\n`;
    };

    Blockly.Arduino.tj2560RgbLed_color = function (block) {
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const g = Blockly.Arduino.valueToCode(block, 'G', Blockly.Arduino.ORDER_ATOMIC);
        const b = Blockly.Arduino.valueToCode(block, 'B', Blockly.Arduino.ORDER_ATOMIC);
        const port = tj2560RgbLed_port;
        return [`ledStrip_${port}.Color(${r}, ${g}, ${b})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
