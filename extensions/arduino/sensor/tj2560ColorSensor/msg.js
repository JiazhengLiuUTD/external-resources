/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560COLORSENSOR_CATEGORY: 'Color Sensor',
        TJ2560COLORSENSOR_READ: 'From 1% port read color values at %2 speed %3 gain',
        TJ2560COLORSENSOR_RED: 'Red value',
        TJ2560COLORSENSOR_GREEN: 'Green value',
        TJ2560COLORSENSOR_BLUE: 'Blue value',
        TJ2560COLORSENSOR_CLEAR: 'CLEAR value'

    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560COLORSENSOR_CATEGORY: '颜色传感器',
        TJ2560COLORSENSOR_READ: '从端口 %1 以 %2 速度 %3 增益倍率读取颜色数值',
        TJ2560COLORSENSOR_RED: '红色通道数据',
        TJ2560COLORSENSOR_GREEN: '绿色通道数据',
        TJ2560COLORSENSOR_BLUE: '蓝色通道数据',
        TJ2560COLORSENSOR_CLEAR: '清晰通道数据'
    });
    return Blockly;
}

exports = addMsg;
