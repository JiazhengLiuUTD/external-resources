/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.tjabKitGrayscaleSensor_read = function (block) {
        const port = block.getFieldValue('PORT');
        const sta = block.getFieldValue('STA');

        Blockly.Arduino.setups_[`tjabKitGrayscaleSensor_read${port}`] = `pinMode(${port}, INPUT_PULLUP);`;
        //Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return [`(digitalRead(${port}) == ${sta})`, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.tjabKitGrayscaleSensor_AnalogRead = function (block) {
        const port = block.getFieldValue('PORT');
        Blockly.Arduino.setups_[`tjabKitGrayscaleSensor_AnalogRead${port}`] = `pinMode(${port}, INPUT);`;
        //Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return [`map(constrain(analogRead(${port}), 0, 850), 0, 850, 1023, 0)`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
