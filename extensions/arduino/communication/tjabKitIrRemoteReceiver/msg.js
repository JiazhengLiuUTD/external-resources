/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        ARDUINOTJABKITEXT_CATEGORY: 'Infrared Receiver Module',
        ARDUINOTJABKITEXT_IRRECIVE: 'read ir %1 port remoter data',
        ARDUINOTJABKITEXT_ISIRPRESS: 'ir remoter channel %1 key %1 is press?',
        ARDUINOTJABKITEXT_HS_ISIRPRESS_1: 'hand shank ir remoter channel %1 key %1 is press?',
        ARDUINOTJABKITEXT_POWER: 'power',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        ARDUINOTJABKITEXT_CATEGORY: '红外收信模块',
        ARDUINOTJABKITEXT_IRRECIVE: '读取 %1 端口红外遥控数据',
        ARDUINOTJABKITEXT_ISIRPRESS: '红外遥控器 通道 %1 按键 %2 被按下?',
        ARDUINOTJABKITEXT_HS_ISIRPRESS: '手柄红外遥控器 通道 %1 按键 %2 被按下?',
        ARDUINOTJABKITEXT_POWER: '电源',
    });
    return Blockly;
}

exports = addMsg;
