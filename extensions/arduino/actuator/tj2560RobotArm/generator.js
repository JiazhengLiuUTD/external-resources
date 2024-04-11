/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.tj2560RobotArm_init = function () {
        return `Serial3.begin(115200);\nSerial3.write("$h\\r\\n");\n`;
    };

    Blockly.Arduino.tj2560RobotArm_reset = function () {
        return `Serial3.write("M21 G90 G00 X0 Y0 Z0 A0 F2000\\r\\n");\n`;
    };

    Blockly.Arduino.tj2560RobotArm_M20 = function (block) {
        const pos = this.getFieldValue('POS');
        const move = this.getFieldValue('MOVE');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const z = Blockly.Arduino.valueToCode(block, 'Z', Blockly.Arduino.ORDER_ATOMIC);
        const a = Blockly.Arduino.valueToCode(block, 'A', Blockly.Arduino.ORDER_ATOMIC);

        return `Serial3.write("M20 G${pos} G${move} x${x} y${y} z${z} a${a}\\r\\n");\n`;
    };

    Blockly.Arduino.tj2560RobotArm_Speed = function (block) {
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        return `Serial3.write("F${speed}\\r\\n");\n`;
    };

    Blockly.Arduino.tj2560RobotArm_Dir_Move = function (block) {
        const d = this.getFieldValue('D');
        const n = Blockly.Arduino.valueToCode(block, 'N', Blockly.Arduino.ORDER_ATOMIC);

        return `Serial3.write("M20 G91 G01 ${d}${n}\\r\\n");\n`;
    };

    Blockly.Arduino.tj2560RobotArm_M21 = function (block) {
        const pos = this.getFieldValue('POS');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const z = Blockly.Arduino.valueToCode(block, 'Z', Blockly.Arduino.ORDER_ATOMIC);
        const a = Blockly.Arduino.valueToCode(block, 'A', Blockly.Arduino.ORDER_ATOMIC);

        return `Serial3.write("M21 G${pos} G00 x${x} y${y} z${z} a${a}\\r\\n");\n`;
    };

    Blockly.Arduino.tj2560RobotArm_Axis_Move = function (block) {
        const joint = this.getFieldValue('JOINT');
        const revolve = this.getFieldValue('REVOLVE');
        const n = Blockly.Arduino.valueToCode(block, 'N', Blockly.Arduino.ORDER_ATOMIC);

        return `Serial3.write("M21 G91 G00 ${joint}${revolve}${n}\\r\\n");\n`;
    };

    Blockly.Arduino.tj2560RobotArm_Arc_Move = function (block) {
        const pos = this.getFieldValue('POS');
        const revolve = this.getFieldValue('REVOLVE');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const z = Blockly.Arduino.valueToCode(block, 'Z', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);

        return `Serial3.write("M20 G${pos} G${revolve} x${x} y${y} z${z} r${r}\\r\\n");\n`;
    };

    Blockly.Arduino.tj2560RobotArm_Tool_Offset = function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const z = Blockly.Arduino.valueToCode(block, 'Z', Blockly.Arduino.ORDER_ATOMIC);

        return `Serial3.write("$46=${x}\\r\\n$47=${y}\\r\\n$48=${z}\\r\\n");\n`;
    };

    Blockly.Arduino.tj2560RobotArm_Suction_Cup = function (block) {
        const sta = this.getFieldValue('STA');

        return `Serial3.write("M3S${sta}\\r\\n");\n`;
    };

    Blockly.Arduino.tj2560RobotArm_Angle_Move = function (block) {
        const angle = Blockly.Arduino.valueToCode(block, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);
        const n = Blockly.Arduino.valueToCode(block, 'N', Blockly.Arduino.ORDER_ATOMIC);
        const x=Math.round(10*n*Math.cos((angle/180)*Math.PI))/10;
        const y=Math.round(10*n*Math.sin((angle/180)*Math.PI))/10;

        return `Serial3.write("M20 G91 G00 x${x} y${y} z0 a0\\r\\n");\n`;
    };

    return Blockly;
}

exports = addGenerator;
