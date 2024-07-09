/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560ROBOTICARM_CATEGORY: 'Robotic Arm',
        TJ2560ROBOTICARM_INIT: 'ROBOTICARM_INIT',
        TJ2560ROBOTICARM_RESET: 'ROBOTICARM_RESET',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560ROBOTICARM_CATEGORY: '机械臂',
        TJ2560ROBOTICARM_INIT: '机械臂初始化',
        TJ2560ROBOTICARM_HOME: '机械臂回零',
        TJ2560ROBOTICARM_RESET: '机械臂回归初始位置',
        TJ2560ROBOTICARM_M20: '机械臂 %1 至 %2 X %3 Y %4 Z %5 速度 %6',
        //TJ2560ROBOTICARM_SPEED:'机械臂运动速度 %1',
        TJ2560ROBOTICARM_G90: '绝对位置',
        TJ2560ROBOTICARM_G91: '相对位置',
        TJ2560ROBOTICARM_G00: '快速运动',
        TJ2560ROBOTICARM_G01: '直线运动',
        TJ2560ROBOTICARM_G05: '门型运动',
        TJ2560ROBOTICARM_DIR_MOVE: '机械臂向 %1 移动 %2 速度 %3',
        TJ2560ROBOTICARM_LEFT: '左(X+)',
        TJ2560ROBOTICARM_RIGHT: '右(X-)',
        TJ2560ROBOTICARM_UP: '上(Z+)',
        TJ2560ROBOTICARM_DOWN: '下(Z-)',
        TJ2560ROBOTICARM_FORWARD: '前(Y+)',
        TJ2560ROBOTICARM_BACKWARD: '后(Y-)',
        //TJ2560ROBOTICARM_M21: '机械臂旋转至 %1 关节1 %2 关节2 %3 关节3 %4 关节4 %5',
        //TJ2560ROBOTICARM_AXIS_MOVE: '机械臂关节 %1 沿 %2 旋转 %3',
        //TJ2560ROBOTICARM_CW: '顺时针',
        //TJ2560ROBOTICARM_CCW: '逆时针',
        //TJ2560ROBOTICARM_ARC_MOVE: '机械臂按圆弧轨迹沿 %1 移动至 %2 X %3 Y %4 Z %5 半径 %6',
        //TJ2560ROBOTICARM_TOOL_OFFSET: '机械臂工具沿 %1 轴偏移 %2',
        TJ2560ROBOTICARM_SUCTION_CUP:'机械臂吸盘 %1',
        TJ2560ROBOTICARM_SUCTION_CUP_ON:'开',
        TJ2560ROBOTICARM_SUCTION_CUP_OFF:'关',
        TJ2560ROBOTICARM_CLAMPING_JAWS:'机械臂夹爪 %1',
        TJ2560ROBOTICARM_CLAMPING_JAWS_OPEN:'开',
        TJ2560ROBOTICARM_CLAMPING_JAWS_CLOSE:'闭',
        //TJ2560ROBOTICARM_SUCTION_CUP_BLOW:'吹',
        TJ2560ROBOTICARM_ANGLE_MOVE:'机械臂向 %1 角度方向运动 %2 速度 %3',
        //TJ2560ROBOTICARM_OFFSET:'机械臂关节 %1 校准至 %2',
        TJ2560ROBOTICARM_STATUS:'机械臂状态查询',
    });
    return Blockly;
}

exports = addMsg;
