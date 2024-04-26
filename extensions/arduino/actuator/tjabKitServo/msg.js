/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJABKIT_SETSERVO_CATEGORY: 'digital servo',
        TJABKIT_SETSERVO: 'set %1 servo angle %2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJABKIT_SETSERVO_CATEGORY: '数码舵机',
        TJABKIT_SETSERVO: '设置 %1 舵机角度 %2',
    });
    return Blockly;
}

exports = addMsg;
