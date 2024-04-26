/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJABKITBUTTON_CATEGORY: 'Button',
        TJABKITBUTTON_READ: 'read %1 button state %2',
        TJABKITBUTTON_SATE_ACTIVE: 'active',
        TJABKITBUTTON_SATE_INACTIVE: 'inactive'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJABKITBUTTON_CATEGORY: '开关模块',
        TJABKITBUTTON_READ: '读取 %1 按键状态 %2',
        TJABKITBUTTON_SATE_ACTIVE: '触发',
        TJABKITBUTTON_SATE_INACTIVE: '未触发'
    });
    return Blockly;
}

exports = addMsg;
