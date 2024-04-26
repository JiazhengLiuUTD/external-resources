/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#4C97FF';
    const secondaryColour = '#3373CC';

    /* ---------------- 板载蜂鸣器 ------------------ */
    const note = [
        ['C3', 'note_C3'],
        ['C#3', 'note_Db3'],
        ['D3', 'note_D3'],
        ['D#3', 'note_Eb3'],
        ['E3', 'note_E3'],
        ['F3', 'note_F3'],
        ['F#3', 'note_Gb3'],
        ['G3', 'note_G3'],
        ['G#3', 'note_Ab3'],
        ['A3', 'note_A3'],
        ['A#3', 'note_Bb3'],
        ['B3', 'note_B3'],
        ['C4', 'note_C4'],
        ['C#4', 'note_Db4'],
        ['D4', 'note_D4'],
        ['D#4', 'note_Eb4'],
        ['E4', 'note_E4'],
        ['F4', 'note_F4'],
        ['F#4', 'note_Gb4'],
        ['G4', 'note_G4'],
        ['G#4', 'note_Ab4'],
        ['A4', 'note_A4'],
        ['A#4', 'note_Bb4'],
        ['B4', 'note_B4'],
        ['C5', 'note_C5'],
        ['C#5', 'note_Db5'],
        ['D5', 'note_D5'],
        ['D#5', 'note_Eb5'],
        ['E5', 'note_E5'],
        ['F5', 'note_F5'],
        ['F#5', 'note_Gb5'],
        ['G5', 'note_G5'],
        ['G#5', 'note_Ab5'],
        ['A5', 'note_A5'],
        ['A#5', 'note_Bb5'],
        ['B5', 'note_B5']
    ];

    const beatTime = [
        ['1', '1'],
        ['1/2', '0.5'],
        ['1/4', '0.25'],
        ['1/8', '0.125'],
        ['1/16', '0.0625'],
        ['2', '2'],
        ['4', '4']
    ];

    Blockly.Blocks.tjabKitExt_playSound = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJABKITEXT_PLAYSOUND,
                args0: [
                    {
                        type: 'input_value',
                        name: 'FREQ'
                    },
                    {
                        type: 'input_value',
                        name: 'TIME'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tjabKitExt_playToneForBeat = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJABKITEXT_PLAYTONEFORBEAT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'FREQ',
                        options: note
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TIME',
                        options: beatTime
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tjabKitExt_setTempo = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJABKITEXT_SETTEMPO,
                args0: [
                    {
                        type: 'input_value',
                        name: 'BPM'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tjabKitExt_playRingtone = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJABKITEXT_PLAYRINGTONE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NO',
                        options: [
                            [Blockly.Msg.TJABKITEXT_CONNECTION, 'R_connection'],
                            [Blockly.Msg.TJABKITEXT_DISCONNECTION, 'R_disconnection'],
                            [Blockly.Msg.TJABKITEXT_DIDI, 'R_buttonPushed'],
                            [Blockly.Msg.TJABKITEXT_MODE1, 'R_mode1'],
                            [Blockly.Msg.TJABKITEXT_MODE2, 'R_mode2'],
                            [Blockly.Msg.TJABKITEXT_MODE3, 'R_mode3'],
                            [Blockly.Msg.TJABKITEXT_SURPRISE, 'R_surprise'],
                            [Blockly.Msg.TJABKITEXT_OHOOH, 'R_OhOoh'],
                            [Blockly.Msg.TJABKITEXT_OHOOH2, 'R_OhOoh2'],
                            [Blockly.Msg.TJABKITEXT_CUDDLY, 'R_cuddly'],
                            [Blockly.Msg.TJABKITEXT_SLEEPING, 'R_sleeping'],
                            [Blockly.Msg.TJABKITEXT_HAPPY, 'R_happy'],
                            [Blockly.Msg.TJABKITEXT_SUPERHAPPY, 'R_superHappy'],
                            [Blockly.Msg.TJABKITEXT_HAPPYSHORT, 'R_happy_short'],
                            [Blockly.Msg.TJABKITEXT_SAD, 'R_sad'],
                            [Blockly.Msg.TJABKITEXT_CONFUSED, 'R_confused'],
                            [Blockly.Msg.TJABKITEXT_FART1, 'R_fart1'],
                            [Blockly.Msg.TJABKITEXT_FART2, 'R_fart2'],
                            [Blockly.Msg.TJABKITEXT_FART3, 'R_fart3']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    /* ---------------- 板载电机驱动 ------------------ */
    Blockly.Blocks.tjabKitExt_onBoardDriverRun = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJABKITEXT_ONBOARDDRIVERRUN,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            [Blockly.Msg.TJABKITEXT_LEFT, 'Left'],
                            [Blockly.Msg.TJABKITEXT_RIGHT, 'Right'],
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DIR',
                        options: [
                            [Blockly.Msg.TJABKITEXT_CW, 'HR8833_CW'],
                            [Blockly.Msg.TJABKITEXT_CCW, 'HR8833_CCW']]
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };     
    Blockly.Blocks.tjabKitExt_onBoardDriverStop = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJABKITEXT_ONBOARDDRIVERSTOP,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            [Blockly.Msg.TJABKITEXT_LEFT, 'Left'],
                            [Blockly.Msg.TJABKITEXT_RIGHT, 'Right'],
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.tjabKitExt_onBoardDriverLock = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJABKITEXT_ONBOARDDRIVERLOCK,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            [Blockly.Msg.TJABKITEXT_LEFT, 'Left'],
                            [Blockly.Msg.TJABKITEXT_RIGHT, 'Right'],
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.tjabKitExt_CarRun = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJABKITEXT_CARRUN,
                args0: [
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DIR',
                        options: [
                            [Blockly.Msg.TJABKITEXT_CARFORWARD, 'forward'],
                            [Blockly.Msg.TJABKITEXT_CARBACKWARD, 'backward'],
                            [Blockly.Msg.TJABKITEXT_CARTURNLEFT, 'turn_left'],
                            [Blockly.Msg.TJABKITEXT_CARTURNRIGHT, 'turn_right'],
                            [Blockly.Msg.TJABKITEXT_CARSTOP, 'all_stop']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED_ERRO'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };     
    /* ---------------- 舵机 ------------------ */
    Blockly.Blocks.arduinoTj2560Ext_setServo = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARDUINOTJ2560EXT_SETSERVO, // set %1 servo angle %2
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            ['3', '3'],
                            ['9', '9'],
                            ['10', '10'],
                            ['11', '11'],
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'ANGLE'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    return Blockly;
}

exports = addBlocks;
