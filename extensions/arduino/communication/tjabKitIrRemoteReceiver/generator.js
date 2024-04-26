/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    
    Blockly.Arduino.arduinoTjabKitExt_irRecive = function () {
        const port = this.getFieldValue('PORT');
        Blockly.Arduino.includes_.arduinoTjabKitExt_irRecive = `#include <IRremote.h>\n#include <tjIRRemoter.h>`;
        Blockly.Arduino.definitions_.arduinoTjabKitExt_irRecive =
`IRrecv ir(${port});
uint32_t irCode = 0;

void irRecive() {
    decode_results results;
    if (ir.decode(&results)) {
        irCode = results.value;
        ir.resume();
    } else {
        irCode = 0;
    }
}`;
        Blockly.Arduino.setups_.arduinoTjabKitExt_isIrPress = `ir.enableIRIn();`;

        return `irRecive();\n`;
    };

    Blockly.Arduino.arduinoTjabKitExt_isIrPress = function () {

        const ch = this.getFieldValue('CH');
        const key = this.getFieldValue('KEY');

        return [`irCode == IRRCCodeList[${key}][${ch}]`, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.arduinoTjabKitExt_hs_isIrPress = function () {
        const ch_1 = this.getFieldValue('CH_1');
        const key_1 = this.getFieldValue('KEY_1');

        return [`irCode == HSIRRCCodeList[${key_1}][${ch_1}]`, Blockly.Arduino.ORDER_ATOMIC];   
    };
    return Blockly;
}

exports = addGenerator;
