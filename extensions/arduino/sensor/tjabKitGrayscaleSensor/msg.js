/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJABKITGRAYSCALESENSOR_CATEGORY: 'GrayscaleSensor Line Tracker',
        TJABKITGRAYSCALESENSOR_READ: 'Read %1 GrayscaleSensor line tracker state %2',
        TJABKITGRAYSCALESENSOR_ANALOGREAD:'Read %1 Port GrayscaleSensor AnalogRead',
        TJABKITGRAYSCALESENSOR_STATE_LIGHT: 'light',
        TJABKITGRAYSCALESENSOR_STATE_DARK: 'dark'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJABKITGRAYSCALESENSOR_CATEGORY: '灰度循迹传感器',
        TJABKITGRAYSCALESENSOR_READ: '读取 %1 端口灰度循迹传感器状态 %2',
        TJABKITGRAYSCALESENSOR_ANALOGREAD:'读取 %1 端口灰度传感器模拟值',
        TJABKITGRAYSCALESENSOR_STATE_LIGHT: '亮',
        TJABKITGRAYSCALESENSOR_STATE_DARK: '灭'
    });
    return Blockly;
}

exports = addMsg;
