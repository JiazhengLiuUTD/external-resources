/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.tjabKitExt_playSound = function (block) {
        const freq = Blockly.Arduino.valueToCode(block, 'FREQ', Blockly.Arduino.ORDER_ATOMIC);
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.tjabKitExt_buzzerInit = `#include <Buzzer.h>`;
        Blockly.Arduino.definitions_.tjabKitExt_buzzerInit = `Buzzer onBoardBuzzer(4);\n` +
            `float beatTime = 60.0 / 120;`;

        return `onBoardBuzzer.tone(${freq}, ${time} * 1000);\n`;
    };

    Blockly.Arduino.tjabKitExt_playToneForBeat = function () {
        const freq = this.getFieldValue('FREQ');
        const time = this.getFieldValue('TIME');

        Blockly.Arduino.includes_.tjabKitExt_buzzerInit = `#include <Buzzer.h>`;
        Blockly.Arduino.definitions_.tjabKitExt_buzzerInit = `Buzzer onBoardBuzzer(4);\n` +
            `float beatTime = 60.0 / 120;`;

        return `onBoardBuzzer.tone(${freq}, ${time} * 1000 * beatTime);\n`;
    };

    Blockly.Arduino.tjabKitExt_setTempo = function (block) {
        const bpm = Blockly.Arduino.valueToCode(block, 'BPM', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.tjabKitExt_buzzerInit = `#include <Buzzer.h>`;
        Blockly.Arduino.definitions_.tjabKitExt_buzzerInit = `Buzzer onBoardBuzzer(4);\n` +
            `float beatTime = 60.0 / 120;`;

        return `beatTime = 60.0 / ${bpm};\n`;
    };

    Blockly.Arduino.tjabKitExt_playRingtone = function () {
        const no = this.getFieldValue('NO');

        Blockly.Arduino.includes_.tjabKitExt_buzzerInit = `#include <Buzzer.h>`;
        Blockly.Arduino.definitions_.tjabKitExt_buzzerInit = `Buzzer onBoardBuzzer(4);\n` +
            `float beatTime = 60.0 / 120;`;

        return `onBoardBuzzer.playRingtone(${no});\n`;
    };

    Blockly.Arduino.tjabKitExt_onBoardDriverRun = function (block) {
        const port = block.getFieldValue('PORT');
        const dir = this.getFieldValue('DIR');
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.tjabKitExt_onBoardDriver_io = `#include <io_tjab.h>`;
        Blockly.Arduino.includes_.tjabKitExt_onBoardDriver_init = `#include <HR8833.h>`;
        Blockly.Arduino.definitions_[`tjabKitExt_onBoardDriver_init_${port}`] = `HR8833 onBoardDriver_${port}(pinMap[${port}][S1], pinMap[${port}][S2]);`;

        return `onBoardDriver_${port}.run(${port},${dir}, ${speed});\n`;
    };

    Blockly.Arduino.tjabKitExt_onBoardDriverStop = function (block) {
        const port = block.getFieldValue('PORT');

        return `onBoardDriver_${port}.stop();\n`;
    };

    Blockly.Arduino.tjabKitExt_onBoardDriverLock = function (block) {
        const port = block.getFieldValue('PORT');

        return `onBoardDriver_${port}.lock();\n`;
    };
  
    Blockly.Arduino.tjabKitExt_CarRun = function (block) {
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
        const dir = this.getFieldValue('DIR');
        const speed_erro = Blockly.Arduino.valueToCode(block, 'SPEED_ERRO', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.tjabKitExt_onBoardDriver_io = `#include <io_tjab.h>`;
        Blockly.Arduino.includes_.tjabKitExt_onBoardDriver_init = `#include <HR8833.h>`;
        Blockly.Arduino.definitions_[`tjabKitExt_onBoardDriver_init_Left`] = `HR8833 onBoardDriver_Left(pinMap[Left][S1], pinMap[Left][S2]); `;
        Blockly.Arduino.definitions_[`tjabKitExt_onBoardDriver_init_Right`] = `HR8833 onBoardDriver_Right(pinMap[Right][S1], pinMap[Right][S2]); `;
        
        return `onBoardDriver_Left.calculate_speed(${speed}, ${speed_erro});\n`+
        `onBoardDriver_Right.calculate_speed(${speed}, ${speed_erro});\n`+
        `onBoardDriver_Left.${dir}(LEFT_MOTOR);\n`+
        `onBoardDriver_Right.${dir}(RIGHT_MOTOR);\n`;
    
    };

  
    return Blockly;
}

exports = addGenerator;
