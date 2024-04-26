/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.tjabKit_SetServo = function (block) {
        const port = block.getFieldValue('PORT');
        const angle = Blockly.Arduino.valueToCode(block, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.tjabKit_SetServo = `#include <Servo.h>`;
        Blockly.Arduino.definitions_[`setServo${port}`] = `Servo servo_${port};`;
        Blockly.Arduino.setups_[`setServo${port}`] = `servo_${port}.attach(${port});`;

        const code = `servo_${port}.write(${angle});\n`;
        return code;
    };

    return Blockly;
}

exports = addGenerator;
