/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.tj2560RobotArm_SS_init = function (block) {
        const port = block.getFieldValue('PORT');
        Blockly.Arduino.includes_.tj2560RobotArm_SS_init = `#include "robotarm_ss.h"`;
        Blockly.Arduino.definitions_.tj2560RobotArm_SS_init = `RobotArm_SS robotarm_ss(pinMap[${port}][S2], pinMap[${port}][S1]);`;

        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return `robotarm_ss.begin();\n`;
    };

    Blockly.Arduino.tj2560RobotArm_SS_home = function () {
        return `robotarm_ss.home();\n`;
    };

    Blockly.Arduino.tj2560RobotArm_SS_reset = function () {
        return `robotarm_ss.reset();\n`;
    };

    Blockly.Arduino.tj2560RobotArm_SS_status = function () {
        return `robotarm_ss.status();\n`;
    };

    Blockly.Arduino.tj2560RobotArm_SS_offset = function (block) {
        const joint = this.getFieldValue('JOINT');
        const n = Blockly.Arduino.valueToCode(block, 'N', Blockly.Arduino.ORDER_ATOMIC);

        return `robotarm_ss.offset(${joint},${n});\n`;
    };

    Blockly.Arduino.tj2560RobotArm_SS_Speed = function (block) {
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        return `robotarm_ss.set_speed(${speed});\n`;
    };

    Blockly.Arduino.tj2560RobotArm_SS_M20 = function (block) {
        const pos = this.getFieldValue('POS');
        const move = this.getFieldValue('MOVE');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const z = Blockly.Arduino.valueToCode(block, 'Z', Blockly.Arduino.ORDER_ATOMIC);
        const a = Blockly.Arduino.valueToCode(block, 'A', Blockly.Arduino.ORDER_ATOMIC);

        return `robotarm_ss.cartesian_lin(${pos},${move},${x},${y},${z},${a});\n`;
    };

    Blockly.Arduino.tj2560RobotArm_SS_Dir_Move = function (block) {
        const d = this.getFieldValue('D');
        const n = Blockly.Arduino.valueToCode(block, 'N', Blockly.Arduino.ORDER_ATOMIC);

        return `robotarm_ss.dir_move("${d}",${n});\n`;
    };

    Blockly.Arduino.tj2560RobotArm_SS_M21 = function (block) {
        const pos = this.getFieldValue('POS');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const z = Blockly.Arduino.valueToCode(block, 'Z', Blockly.Arduino.ORDER_ATOMIC);
        const a = Blockly.Arduino.valueToCode(block, 'A', Blockly.Arduino.ORDER_ATOMIC);

        return `robotarm_ss.axis(${pos},${x},${y},${z},${a});\n`;
    };

    Blockly.Arduino.tj2560RobotArm_SS_Axis_Move = function (block) {
        const joint = this.getFieldValue('JOINT');
        const revolve = this.getFieldValue('REVOLVE');
        const n = Blockly.Arduino.valueToCode(block, 'N', Blockly.Arduino.ORDER_ATOMIC);

        return `robotarm_ss.axis_move("${joint}",${revolve},${n});\n`;
    };

    Blockly.Arduino.tj2560RobotArm_SS_Arc_Move = function (block) {
        const pos = this.getFieldValue('POS');
        const revolve = this.getFieldValue('REVOLVE');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const z = Blockly.Arduino.valueToCode(block, 'Z', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);

        return `robotarm_ss.arc_move(${pos},${revolve},${x},${y},${z},${r});\n`;
    };

    Blockly.Arduino.tj2560RobotArm_SS_Tool_Offset = function (block) {
        const d = this.getFieldValue('D');
        const n = Blockly.Arduino.valueToCode(block, 'N', Blockly.Arduino.ORDER_ATOMIC);

        return `robotarm_ss.tool_offset(${d},${n});\n`;
    };

    Blockly.Arduino.tj2560RobotArm_SS_Suction_Cup = function (block) {
        const sta = this.getFieldValue('STA');

        return `robotarm_ss.suction_cup(${sta});\n`;
    };

    Blockly.Arduino.tj2560RobotArm_SS_Angle_Move = function (block) {
        const angle = Blockly.Arduino.valueToCode(block, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);
        const n = Blockly.Arduino.valueToCode(block, 'N', Blockly.Arduino.ORDER_ATOMIC);
        const x=Math.round(10*n*Math.cos((angle/180)*Math.PI))/10;
        const y=Math.round(10*n*Math.sin((angle/180)*Math.PI))/10;

        return `robotarm_ss.cartesian_lin(INCREMENT,MOVEJ,${x},${y},0,0);\n`;
    };

    return Blockly;
}

exports = addGenerator;
