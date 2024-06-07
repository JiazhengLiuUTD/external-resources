/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.tj2560RobotArm_init = function () {
        Blockly.Arduino.includes_.tj2560RobotArm_init = `#include "robotarm.h"`;
        Blockly.Arduino.definitions_.tj2560RobotArm_init = `RobotArm robotarm;`;

        return `robotarm.begin();\n`;
    };

    Blockly.Arduino.tj2560RobotArm_home = function () {
        return `robotarm.home();\n`;
    };

    Blockly.Arduino.tj2560RobotArm_reset = function () {
        return `robotarm.reset();\n`;
    };

    Blockly.Arduino.tj2560RobotArm_status = function () {
        return `robotarm.status();\n`;
    };

    Blockly.Arduino.tj2560RobotArm_offset = function (block) {
        const joint = this.getFieldValue('JOINT');
        const n = Blockly.Arduino.valueToCode(block, 'N', Blockly.Arduino.ORDER_ATOMIC);

        return `robotarm.offset(${joint},${n});\n`;
    };

    Blockly.Arduino.tj2560RobotArm_Speed = function (block) {
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        return `robotarm.set_speed(${speed});\n`;
    };

    Blockly.Arduino.tj2560RobotArm_M20 = function (block) {
        const pos = this.getFieldValue('POS');
        const move = this.getFieldValue('MOVE');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const z = Blockly.Arduino.valueToCode(block, 'Z', Blockly.Arduino.ORDER_ATOMIC);
        const a = Blockly.Arduino.valueToCode(block, 'A', Blockly.Arduino.ORDER_ATOMIC);

        return `robotarm.cartesian_lin(${pos},${move},${x},${y},${z},${a});\n`;
    };

    Blockly.Arduino.tj2560RobotArm_Dir_Move = function (block) {
        const d = this.getFieldValue('D');
        const n = Blockly.Arduino.valueToCode(block, 'N', Blockly.Arduino.ORDER_ATOMIC);

        return `robotarm.dir_move("${d}",${n});\n`;
    };

    Blockly.Arduino.tj2560RobotArm_M21 = function (block) {
        const pos = this.getFieldValue('POS');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const z = Blockly.Arduino.valueToCode(block, 'Z', Blockly.Arduino.ORDER_ATOMIC);
        const a = Blockly.Arduino.valueToCode(block, 'A', Blockly.Arduino.ORDER_ATOMIC);

        return `robotarm.axis(${pos},${x},${y},${z},${a});\n`;
    };

    Blockly.Arduino.tj2560RobotArm_Axis_Move = function (block) {
        const joint = this.getFieldValue('JOINT');
        const revolve = this.getFieldValue('REVOLVE');
        const n = Blockly.Arduino.valueToCode(block, 'N', Blockly.Arduino.ORDER_ATOMIC);

        return `robotarm.axis_move("${joint}",${revolve},${n});\n`;
    };

    Blockly.Arduino.tj2560RobotArm_Arc_Move = function (block) {
        const pos = this.getFieldValue('POS');
        const revolve = this.getFieldValue('REVOLVE');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const z = Blockly.Arduino.valueToCode(block, 'Z', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);

        return `robotarm.arc_move(${pos},${revolve},${x},${y},${z},${r});\n`;
    };

    Blockly.Arduino.tj2560RobotArm_Tool_Offset = function (block) {
        const d = this.getFieldValue('D');
        const n = Blockly.Arduino.valueToCode(block, 'N', Blockly.Arduino.ORDER_ATOMIC);

        return `robotarm.tool_offset(${d},${n});\n`;
    };

    Blockly.Arduino.tj2560RobotArm_Suction_Cup = function (block) {
        const sta = this.getFieldValue('STA');

        return `robotarm.suction_cup(${sta});\n`;
    };

    Blockly.Arduino.tj2560RobotArm_Angle_Move = function (block) {
        const angle = Blockly.Arduino.valueToCode(block, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);
        const n = Blockly.Arduino.valueToCode(block, 'N', Blockly.Arduino.ORDER_ATOMIC);
        const x=Math.round(10*n*Math.cos((angle/180)*Math.PI))/10;
        const y=Math.round(10*n*Math.sin((angle/180)*Math.PI))/10;

        return `robotarm.cartesian_lin(INCREMENT,MOVEJ,${x},${y},0,0);\n`;
    };

    return Blockly;
}

exports = addGenerator;
