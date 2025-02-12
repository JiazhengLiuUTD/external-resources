/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJABKITEXT_CATEGORY: 'Controller-B+',
        TJABKITEXT_PLAYSOUND: 'on board buzzer play sound with frequency %1 Hz for %2 second',
        TJABKITEXT_PLAYTONEFORBEAT: 'on board buzzer play tone %1 for %2 beat',
        TJABKITEXT_SETTEMPO: 'set on board buzzer tempo to (bpm) %1',
        TJABKITEXT_PLAYRINGTONE: 'on board buzzer play ringtone %1',
        TJABKITEXT_CONNECTION: 'connection',
        TJABKITEXT_DISCONNECTION: 'disconnet',
        TJABKITEXT_DIDI: 'button pushed',
        TJABKITEXT_MODE1: 'mode1',
        TJABKITEXT_MODE2: 'mode2',
        TJABKITEXT_MODE3: 'mode3',
        TJABKITEXT_SURPRISE: 'surprise',
        TJABKITEXT_OHOOH: 'OhOoh',
        TJABKITEXT_OHOOH2: 'OhOoh2',
        TJABKITEXT_CUDDLY: 'cuddly',
        TJABKITEXT_SLEEPING: 'sleeping',
        TJABKITEXT_HAPPY: 'happy',
        TJABKITEXT_SUPERHAPPY: 'super happy',
        TJABKITEXT_HAPPYSHORT: 'happy short',
        TJABKITEXT_SAD: 'sad',
        TJABKITEXT_CONFUSED: 'confused',
        TJABKITEXT_FART1: 'fart1',
        TJABKITEXT_FART2: 'fart2',
        TJABKITEXT_FART3: 'fart3',
        TJABKITEXT_ONBOARDDRIVERRUN: 'Set motor %1 to %2 at %3 speed',
        TJABKITEXT_LEFT: 'left',
        TJABKITEXT_RIGHT: 'right',
        TJABKITEXT_CW: 'clockwise',
        TJABKITEXT_CCW: 'counterclockwise',
        TJABKITEXT_CARRUN: 'Set car at %1 speed %2 ,adjusting speed: %3',
        TJABKITEXT_CARFORWARD: 'forward',
        TJABKITEXT_CARBACKWARD: 'backward',
        TJABKITEXT_CARTURNLEFT: 'turnleft',
        TJABKITEXT_CARTURNRIGHT: 'turnright',
        TJABKITEXT_CARSTOP: 'stop',     
        TJABKITEXT_ONBOARDDRIVERSTOP: 'Set %1 motorstop',
        TJABKITEXT_ONBOARDDRIVERLOCK: 'Set %1 motor lock'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJABKITEXT_CATEGORY: 'Controller-B+',
        TJABKITEXT_PLAYSOUND: '板载蜂鸣器以频率 %1 Hz 播放声音持续 %2 秒',
        TJABKITEXT_PLAYTONEFORBEAT: '板载蜂鸣器播放音调 %1 持续 %2 节拍',
        TJABKITEXT_SETTEMPO: '设置板载蜂鸣器节奏为 (bpm) %1',
        TJABKITEXT_PLAYRINGTONE: '板载蜂鸣器播放铃声 %1',
        TJABKITEXT_CONNECTION: '连接',
        TJABKITEXT_DISCONNECTION: '断开',
        TJABKITEXT_DIDI: '按键按下',
        TJABKITEXT_MODE1: '模式1',
        TJABKITEXT_MODE2: '模式2',
        TJABKITEXT_MODE3: '模式3',
        TJABKITEXT_SURPRISE: '惊讶',
        TJABKITEXT_OHOOH: '哦哦',
        TJABKITEXT_OHOOH2: '哦哦2',
        TJABKITEXT_CUDDLY: '可爱',
        TJABKITEXT_SLEEPING: '正在睡觉',
        TJABKITEXT_HAPPY: '开心',
        TJABKITEXT_SUPERHAPPY: '非常开心',
        TJABKITEXT_HAPPYSHORT: '开心短',
        TJABKITEXT_SAD: '难过',
        TJABKITEXT_CONFUSED: '困惑',
        TJABKITEXT_FART1: '放屁1',
        TJABKITEXT_FART2: '放屁2',
        TJABKITEXT_FART3: '放屁3',
        TJABKITEXT_ONBOARDDRIVERRUN: '设置 %1 电机以 %3 速度向 %2 行驶',
        TJABKITEXT_LEFT: '左',
        TJABKITEXT_RIGHT: '右',
        TJABKITEXT_CW: '顺时针',
        TJABKITEXT_CCW: '逆时针',
        TJABKITEXT_ONBOARDDRIVERSTOP: '设置 %1 电机停止',
        TJABKITEXT_ONBOARDDRIVERLOCK: '设置 %1 电机刹车',
        TJABKITEXT_CARRUN: '设置小车以 %1 速度 %2 ，矫正速度 %3',
        TJABKITEXT_CARFORWARD: '前进',
        TJABKITEXT_CARBACKWARD: '后退',
        TJABKITEXT_CARTURNLEFT: '左转',
        TJABKITEXT_CARTURNRIGHT: '右转',
        TJABKITEXT_CARSTOP: '停止'
    });

    return Blockly;
}

exports = addMsg;
