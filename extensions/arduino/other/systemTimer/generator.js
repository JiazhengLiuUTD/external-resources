/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.systemTime_MSRead = function (block) {
        Blockly.Arduino.definitions_[`systemTime_Ms`]= ` `;
        return [`millis()`, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.systemTime_USRead = function (block) {
        Blockly.Arduino.definitions_[`systemTime_Us`]= ` `;
        return [`micros()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.systemTime_ProgramRunTime = function (block) {
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);
        let systemTime_Branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
        systemTime_Branch = Blockly.Arduino.addLoopTrap(systemTime_Branch, block.id);
        Blockly.Arduino.definitions_[`systemTime_ProgramRunTime`] = `uint32_t start_time,last_time,alarm_time = 0;\n `;
        return `alarm_time = 0;
start_time =millis();
while (!(alarm_time > ${time})){
    last_time = millis();
    alarm_time = (last_time - start_time)/1000;
    ${systemTime_Branch} }\n
`;
    };

    return Blockly;
}

exports = addGenerator;
