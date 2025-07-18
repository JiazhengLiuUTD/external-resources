/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.HUMANOID_init = function () {
        Blockly.Arduino.includes_.HUMANOID_init = `#include "humanoid.h"`;
        Blockly.Arduino.definitions_.HUMANOID_init = `Humanoid humanoid;`;

        return `humanoid.begin();\n`;
    };


    Blockly.Arduino.HUMANOID_ACTION = function () {
        const sta = this.getFieldValue('STA');
        return `humanoid.action(${sta});\n`;
    };

    Blockly.Arduino.HUMANOID_HEAD = function () {
        const h = this.getFieldValue('H');
        return `humanoid.head(${h});\n`;
    };

    Blockly.Arduino.HUMANOID_SERVO = function (block) {
        const d = this.getFieldValue('D');
        const n = Blockly.Arduino.valueToCode(block, 'N', Blockly.Arduino.ORDER_ATOMIC);
        return `humanoid.servo(${d},${n});\n`;
    };

    return Blockly;
}
exports = addGenerator;
