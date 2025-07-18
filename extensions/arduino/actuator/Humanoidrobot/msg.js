/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        HUMANOID_CATEGORY: 'Humanoidrobot',
        HUMANOID_INIT: 'Humanoid_INIT',
        //HUMANOID_RESET: 'ROBOTICARM_RESET',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        HUMANOID_CATEGORY: '人形',
        HUMANOID_INIT: '人形机器人初始化',
        HUMANOID_ACTION:'人形机器人进行 %1 动作',
        HUMANOID_ACTION_FORWARD:'前进',
        HUMANOID_ACTION_BACK:'后退',
        HUMANOID_ACTION_SLEFT:'左移',
        HUMANOID_ACTION_SRIGHT:'右移',
        HUMANOID_ACTION_LEFT:'左转',
        HUMANOID_ACTION_RIGHT:'右转',
        HUMANOID_ACTION_PICK:'拾起',
        HUMANOID_ACTION_PUT:'放下',
        HUMANOID_ACTION_STAND:'站立',
        HUMANOID_ACTION_BOW:'鞠躬',
        HUMANOID_ACTION_FASTF:'放跑',
        HUMANOID_ACTION_FASTB:'快退',
        HUMANOID_ACTION_BOWWALK:'抱箱走',
        HUMANOID_ACTION_LKICK:'左射门',
        HUMANOID_ACTION_RKICK:'右射门',
        HUMANOID_HEAD:'机器人头部向 %1 转动',
        HUMANOID_HEAD_UP:'上',
        HUMANOID_HEAD_DOWN:'下',
        HUMANOID_HEAD_LEFT:'左',
        HUMANOID_HEAD_RIGHT:'右',
        HUMANOID_SERVO : '机器人 %1 舵机设置角度值为 %2 ',
        HUMANOID_H1 : '头部垂直',
        HUMANOID_H2 : '头部水平',
        HUMANOID_A1 : '左腿1',
        HUMANOID_A2 : '左腿2',
        HUMANOID_A3 : '左腿3',
        HUMANOID_A4 : '左腿4',
        HUMANOID_A5 : '左腿5',
        HUMANOID_B1 : '左臂1',
        HUMANOID_B2 : '左臂2',
        HUMANOID_B3 : '左臂3',
        HUMANOID_C1 : '右臂1',
        HUMANOID_C2 : '右臂2',
        HUMANOID_C3 : '右臂3',
        HUMANOID_D1 : '右腿1',
        HUMANOID_D2 : '右腿2',
        HUMANOID_D3 : '右腿3',
        HUMANOID_D4 : '右腿4',
        HUMANOID_D5 : '右腿5',

    });
    return Blockly;
}

exports = addMsg;
