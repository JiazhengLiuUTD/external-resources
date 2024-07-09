/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.tj2560RoboticArm_init = function () {
        Blockly.Arduino.includes_.tj2560RoboticArm_init = `#include "roboticarm.h"`;
        Blockly.Arduino.definitions_.tj2560RoboticArm_init = `RoboticArm roboticarm;`;

        return `roboticarm.begin();\n`;
    };

    Blockly.Arduino.tj2560RoboticArm_home = function () {
        return `roboticarm.home();\n`;
    };

    Blockly.Arduino.tj2560RoboticArm_reset = function () {
        return `roboticarm.reset();\n`;
    };

    Blockly.Arduino.tj2560RoboticArm_status = function () {
        return `roboticarm.status();\n`;
    };

    Blockly.Arduino.tj2560RoboticArm_M20 = function (block) {
        const pos = this.getFieldValue('POS');
        const move = this.getFieldValue('MOVE');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const z = Blockly.Arduino.valueToCode(block, 'Z', Blockly.Arduino.ORDER_ATOMIC);
        const f = Blockly.Arduino.valueToCode(block, 'F', Blockly.Arduino.ORDER_ATOMIC);

        return `roboticarm.cartesian_lin(${pos},${move},${x},${y},${z},${f});\n`;
    };

    Blockly.Arduino.tj2560RoboticArm_Dir_Move = function (block) {
        const d = this.getFieldValue('D');
        const n = Blockly.Arduino.valueToCode(block, 'N', Blockly.Arduino.ORDER_ATOMIC);
        const f = Blockly.Arduino.valueToCode(block, 'F', Blockly.Arduino.ORDER_ATOMIC);

        return `roboticarm.dir_move("${d}",${n},${f});\n`;
    };

    Blockly.Arduino.tj2560RoboticArm_Suction_Cup = function () {
        const sta = this.getFieldValue('STA');

        return `roboticarm.suction_cup(${sta});\n`;
    };

    Blockly.Arduino.tj2560RoboticArm_Clamping_Jaws = function () {
        const sta = this.getFieldValue('STA');

        return `roboticarm.clamping_jaws(${sta});\n`;
    };

    Blockly.Arduino.tj2560RoboticArm_Angle_Move = function (block) {
        const angle = Blockly.Arduino.valueToCode(block, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);
        const n = Blockly.Arduino.valueToCode(block, 'N', Blockly.Arduino.ORDER_ATOMIC);
        const f = Blockly.Arduino.valueToCode(block, 'F', Blockly.Arduino.ORDER_ATOMIC);
        const x=Math.round(10*n*Math.cos((angle/180)*Math.PI))/10;
        const y=Math.round(10*n*Math.sin((angle/180)*Math.PI))/10;

        return `roboticarm.cartesian_lin(INCREMENT,MOVEL,${x},${y},0,${f});\n`;
    };

    return Blockly;
}

exports = addGenerator;
