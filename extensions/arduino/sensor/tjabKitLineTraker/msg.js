/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJABKITLINETRAKER_CATEGORY: 'Line Tracker',
        TJABKITLINETRAKER_READ: 'read %1 line tracker state %2',
        TJABKITLINETRAKER_STATE_LIGHT: 'light',
        TJABKITLINETRAKER_STATE_DARK: 'dark'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJABKITLINETRAKER_CATEGORY: '循迹传感器',
        TJABKITLINETRAKER_READ: '读取 %1 循迹传感器状态 %2',
        TJABKITLINETRAKER_STATE_LIGHT: '亮',
        TJABKITLINETRAKER_STATE_DARK: '灭'
    });
    return Blockly;
}

exports = addMsg;
