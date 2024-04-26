/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.tjabKitLineTraker_read = function (block) {
        const port = block.getFieldValue('PORT');
        const sta = block.getFieldValue('STA');

        Blockly.Arduino.setups_[`tjabKitLineTraker_read${port}`] = `pinMode(${port}, INPUT_PULLUP);`;
        
        return [`(digitalRead(${port}) == ${sta})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
