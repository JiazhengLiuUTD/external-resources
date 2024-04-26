/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.tjabKitLed_set = function (block) {
        const port = block.getFieldValue('PORT');
        const state = block.getFieldValue('STATE');

        Blockly.Arduino.setups_.tjabKitLed_set = `pinMode(${port}, OUTPUT);`;
        return `digitalWrite(${port}, ${state});\n`;
    };

    return Blockly;
}

exports = addGenerator;
