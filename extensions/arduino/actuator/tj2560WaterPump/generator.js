/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.tj2560WaterPump_turn = function (block) {
        Blockly.Arduino.includes_.tj2560WaterPump_init = `#include <tj2560WaterPump.h>`;
        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;
        //Blockly.Arduino.setups_.tj2560MotorDriver_init = `driver.init();`;

        const port = this.getFieldValue('PORT');
        const state = this.getFieldValue('STATE');
        Blockly.Arduino.definitions_.tj2560MotorDriver_init = `Tj2560WaterPump pump(pinMap[${port}][S1]);`;
        
        //const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        return `pump.${state}();\n`;
    };

    return Blockly;
}

exports = addGenerator;
