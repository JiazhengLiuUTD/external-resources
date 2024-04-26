/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560GRAYSCALESENSOR_CATEGORY: 'GrayscaleSensor Line Tracker',
        TJ2560GRAYSCALESENSOR_READ: 'Read %1 Port GrayscaleSensor Line Tracker State %2',
        TJ2560GRAYSCALESENSOR_ANALOGREAD:'Read %1 Port GrayscaleSensor AnalogRead',
        TJ2560GRAYSCALESENSOR_STATE_LIGHT: 'light',
        TJ2560GRAYSCALESENSOR_STATE_DARK: 'dark'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560GRAYSCALESENSOR_CATEGORY: '灰度循迹传感器',
        TJ2560GRAYSCALESENSOR_READ: '读取 %1 端口灰度循迹传感器状态 %2',
        TJ2560GRAYSCALESENSOR_ANALOGREAD:'读取 %1 端口灰度传感器模拟值',
        TJ2560GRAYSCALESENSOR_STATE_LIGHT: '亮',
        TJ2560GRAYSCALESENSOR_STATE_DARK: '灭'
    });
    return Blockly;
}

exports = addMsg;
