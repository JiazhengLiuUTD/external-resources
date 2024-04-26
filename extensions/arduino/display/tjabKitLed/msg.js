/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJABKITLED_CATEGORY: 'Led',
        TJABKITLED_SET: 'set %1 led %2',
        TJABKITLED_ON: 'on',
        TJABKITLED_OFF: 'off'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJABKITLED_CATEGORY: 'LED 模块',
        TJABKITLED_SET: '设置 %1 LED 模块 %2',
        TJABKITLED_ON: '点亮',
        TJABKITLED_OFF: '熄灭'
    });
    return Blockly;
}

exports = addMsg;
