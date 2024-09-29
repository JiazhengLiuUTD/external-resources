/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560WATERPUMP_CATEGORY: 'Water Pump',
        TJ2560WATERPUMP_TURN: ' %1 water pump turn %2',
        TJ2560WATERPUMP_ON: 'ON',
        TJ2560WATERPUMP_OFF: 'OFF',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560WATERPUMP_CATEGORY: '水泵',
        TJ2560WATERPUMP_TURN: ' %1 水泵 %2 ',
        TJ2560WATERPUMP_ON: '开',
        TJ2560WATERPUMP_OFF: '关',
    });
    return Blockly;
}

exports = addMsg;
