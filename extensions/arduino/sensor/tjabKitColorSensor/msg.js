/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJABKITCOLORSENSOR_CATEGORY: 'Color Sensor',
        TJABKITCOLORSENSOR_READ: 'From 1% port read color values at %2 speed %3 gain',
        TJABKITCOLORSENSOR_RED: 'Red value',
        TJABKITCOLORSENSOR_GREEN: 'Green value',
        TJABKITCOLORSENSOR_BLUE: 'Blue value',
        TJABKITCOLORSENSOR_CLEAR: 'CLEAR value'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJABKITCOLORSENSOR_CATEGORY: '颜色传感器',
        TJABKITCOLORSENSOR_READ: '从 %1 端口以 %2 速度 %3 增益倍率 读取颜色数值',
        TJABKITCOLORSENSOR_RED: '红色通道数据',
        TJABKITCOLORSENSOR_GREEN: '绿色通道数据',
        TJABKITCOLORSENSOR_BLUE: '蓝色通道数据',
        TJABKITCOLORSENSOR_CLEAR: '清晰通道数据'
    });
    return Blockly;
}

exports = addMsg;
