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

    Blockly.Blocks.TJ2560HRCExt_playSound = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCEXT_PLAYSOUND,
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

    Blockly.Blocks.TJ2560HRCExt_playToneForBeat = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCEXT_PLAYTONEFORBEAT,
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

    Blockly.Blocks.TJ2560HRCExt_setTempo = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCEXT_SETTEMPO,
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

    Blockly.Blocks.TJ2560HRCExt_playRingtone = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCEXT_PLAYRINGTONE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NO',
                        options: [
                            [Blockly.Msg.TJ2560HRCEXT_CONNECTION, 'R_connection'],
                            [Blockly.Msg.TJ2560HRCEXT_DISCONNECTION, 'R_disconnection'],
                            [Blockly.Msg.TJ2560HRCEXT_DIDI, 'R_buttonPushed'],
                            [Blockly.Msg.TJ2560HRCEXT_MODE1, 'R_mode1'],
                            [Blockly.Msg.TJ2560HRCEXT_MODE2, 'R_mode2'],
                            [Blockly.Msg.TJ2560HRCEXT_MODE3, 'R_mode3'],
                            [Blockly.Msg.TJ2560HRCEXT_SURPRISE, 'R_surprise'],
                            [Blockly.Msg.TJ2560HRCEXT_OHOOH, 'R_OhOoh'],
                            [Blockly.Msg.TJ2560HRCEXT_OHOOH2, 'R_OhOoh2'],
                            [Blockly.Msg.TJ2560HRCEXT_CUDDLY, 'R_cuddly'],
                            [Blockly.Msg.TJ2560HRCEXT_SLEEPING, 'R_sleeping'],
                            [Blockly.Msg.TJ2560HRCEXT_HAPPY, 'R_happy'],
                            [Blockly.Msg.TJ2560HRCEXT_SUPERHAPPY, 'R_superHappy'],
                            [Blockly.Msg.TJ2560HRCEXT_HAPPYSHORT, 'R_happy_short'],
                            [Blockly.Msg.TJ2560HRCEXT_SAD, 'R_sad'],
                            [Blockly.Msg.TJ2560HRCEXT_CONFUSED, 'R_confused'],
                            [Blockly.Msg.TJ2560HRCEXT_FART1, 'R_fart1'],
                            [Blockly.Msg.TJ2560HRCEXT_FART2, 'R_fart2'],
                            [Blockly.Msg.TJ2560HRCEXT_FART3, 'R_fart3']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };


    /* ---------------- 板载蓝牙 ------------------ */
    Blockly.Blocks.TJ2560HRCExt_bluetoothPrint = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCEXT_BLUETOOTHPRINT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DATA'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'EOL',
                        options: [
                            [Blockly.Msg.TJ2560HRCEXT_WARP, '0'],
                            [Blockly.Msg.TJ2560HRCEXT_NOWARP, '1']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.TJ2560HRCExt_bluetoothAvailable = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCEXT_BLUETOOTHAVAILABLE,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.TJ2560HRCExt_bluetoothReadAByte = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCEXT_BLUETOOTHREADABYTE,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.TJ2560HRCExt_irRecive = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCEXT_IRRECIVE,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.TJ2560HRCExt_isIrPress = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCEXT_ISIRPRESS,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'CH',
                        options: [
                            ['1', '0'],
                            ['2', '1'],
                            ['3', '2'],
                            ['4', '3']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'KEY',
                        options: [
                            ['1', '0'],
                            ['2', '1'],
                            ['3', '2'],
                            ['4', '3'],
                            ['5', '4'],
                            ['6', '5'],
                            ['7', '6'],
                            ['8', '7'],
                            ['9', '8'],
                            ['0', '9'],
                            ['▲', '10'],
                            ['▼', '11'],
                            ['▶', '12'],
                            ['◀', '13'],
                            ['A', '14'],
                            [Blockly.Msg.TJ2560HRCEXT_POWER, '15'],
                            ['C', '16'],
                            ['E', '17'],
                            ['P2', '18'],
                            ['B', '19'],
                            ['△', '20'],
                            ['*', '21'],
                            ['G', '22'],
                            ['#', '23'],
                            ['P1', '24'],
                            ['■', '25'],
                            ['D', '26'],
                            ['◁', '27'],
                            ['□', '28'],
                            ['▷', '29'],
                            ['▽', '30'],
                            ['F', '31']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };
    Blockly.Blocks.TJ2560HRCExt_msDelay ={
        init: function () {
        this.jsonInit({
            message0: Blockly.Msg.TJ2560HRCEXT_SETTIME,
            args0: [
                {
                    type: 'input_value',
                    name: 'US_'
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
