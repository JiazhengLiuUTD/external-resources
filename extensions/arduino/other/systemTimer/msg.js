/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SYSTEMTIME_CATEGORY: 'systemtime module',
        SYSTEMTIME_MSREAD: 'read system run time ms',
        SYSTEMTIME_USREAD: 'read system run time us',
        SYSTEMTIME_AAA: 'aaa',
        SYSTEMTIME_BBB: 'bbb',
        SYSTEMTIME_CCC: 'ccc',
        SYSTEMTIME_PROGRAMRUNTIME: 'run  %1 s program'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SYSTEMTIME_CATEGORY: '系统时间模块',
        SYSTEMTIME_MSREAD: '读取系统运行时间(ms)',
        SYSTEMTIME_USREAD: '读取系统运行时间(us)',
        SYSTEMTIME_AAA: 'aaa',
        SYSTEMTIME_BBB: 'bbb',
        SYSTEMTIME_CCC: 'ccc',
        SYSTEMTIME_PROGRAMRUNTIME: '执行 %1 秒程序'
    });
    return Blockly;
}

exports = addMsg;
