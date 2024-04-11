/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560ROBOTARM_CATEGORY: 'Robot Arm',
        TJ2560ROBOTARM_INIT: 'ROBOTARM_INIT',
        TJ2560ROBOTARM_RESET: 'ROBOTARM_RESET',
        TJ2560ROBOTARM_M20_G90_G00: 'Robot Arm Fast Move to X %1 Y %2 Z %3',
        TJ2560ROBOTARM_SPEED:'Set Robot Arm Speed %1',

    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560ROBOTARM_CATEGORY: '机械臂',
        TJ2560ROBOTARM_INIT: '机械臂初始化',
        TJ2560ROBOTARM_RESET: '机械臂回归零位',
        TJ2560ROBOTARM_M20: '机械臂 %1 至 %2 X %3 Y %4 Z %5 方向A %6',
        TJ2560ROBOTARM_SPEED:'机械臂末端运动速度 %1',
        TJ2560ROBOTARM_G90: '绝对位置',
        TJ2560ROBOTARM_G91: '相对位置',
        TJ2560ROBOTARM_G00: '快速运动',
        TJ2560ROBOTARM_G01: '直线运动',
        TJ2560ROBOTARM_G05: '门型运动',
        TJ2560ROBOTARM_DIR_MOVE: '机械臂向 %1 移动 %2',
        TJ2560ROBOTARM_FORWARD: '前(Y+)',
        TJ2560ROBOTARM_BACKWARD: '后(Y-)',
        TJ2560ROBOTARM_UP: '上(Z+)',
        TJ2560ROBOTARM_DOWN: '下(Z-)',
        TJ2560ROBOTARM_RIGHT: '右(X+)',
        TJ2560ROBOTARM_LEFT: '左(X-)',
        TJ2560ROBOTARM_M21: '机械臂旋转至 %1 关节1 %2 关节2 %3 关节3 %4 关节4 %5',
        TJ2560ROBOTARM_AXIS_MOVE: '关节 %1 沿 %2 旋转 %3',
        TJ2560ROBOTARM_CW: '顺时针',
        TJ2560ROBOTARM_CCW: '逆时针',
        TJ2560ROBOTARM_ARC_MOVE: '机械臂按圆弧轨迹沿 %1 移动至 %2 X %3 Y %4 Z %5 半径 %6',
        TJ2560ROBOTARM_TOOL_OFFSET: '工具偏移 X %1 Y %2 Z %3',
        TJ2560ROBOTARM_SUCTION_CUP:'吸盘 %1',
        TJ2560ROBOTARM_SUCTION_CUP_ON:'开',
        TJ2560ROBOTARM_SUCTION_CUP_OFF:'关',
        TJ2560ROBOTARM_SUCTION_CUP_BLOW:'吹',
        TJ2560ROBOTARM_ANGLE_MOVE:'向 %1 角度方向运动 %2',
    });
    return Blockly;
}

exports = addMsg;
