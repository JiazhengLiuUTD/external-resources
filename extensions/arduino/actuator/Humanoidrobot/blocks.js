/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#00CED1';
    const secondaryColour = '#00CED1';

    Blockly.Blocks.HUMANOID_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HUMANOID_INIT,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.HUMANOID_ACTION = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HUMANOID_ACTION,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STA',
                        options: [
                            [Blockly.Msg.HUMANOID_ACTION_FORWARD, '1'],
                            [Blockly.Msg.HUMANOID_ACTION_BACK, '2'],
                            [Blockly.Msg.HUMANOID_ACTION_SLEFT, '3'],
                            [Blockly.Msg.HUMANOID_ACTION_SRIGHT, '4'],
                            [Blockly.Msg.HUMANOID_ACTION_LEFT, '5'],
                            [Blockly.Msg.HUMANOID_ACTION_RIGHT, '6'],
                            [Blockly.Msg.HUMANOID_ACTION_PICK, '7'],
                            [Blockly.Msg.HUMANOID_ACTION_PUT, '8'],
                            [Blockly.Msg.HUMANOID_ACTION_STAND, '9'],
                            [Blockly.Msg.HUMANOID_ACTION_BOW, '10'],
                            [Blockly.Msg.HUMANOID_ACTION_FASTF, '11'],
                            [Blockly.Msg.HUMANOID_ACTION_FASTB, '12'],
                            [Blockly.Msg.HUMANOID_ACTION_BOWWALK, '13'],
                            [Blockly.Msg.HUMANOID_ACTION_LKICK, '20'],
                            [Blockly.Msg.HUMANOID_ACTION_RKICK, '21']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

Blockly.Blocks.HUMANOID_HEAD = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.HUMANOID_HEAD,
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'H',
                    options: [
                        [Blockly.Msg.HUMANOID_HEAD_UP, '16'],
                        [Blockly.Msg.HUMANOID_HEAD_DOWN, '17'],
                        [Blockly.Msg.HUMANOID_HEAD_LEFT, '18'],
                        [Blockly.Msg.HUMANOID_HEAD_RIGHT, '19']
                    ]
                }
            ],
            colour: color,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};


    Blockly.Blocks.HUMANOID_SERVO = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HUMANOID_SERVO,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'D',
                        "options": [
                            [Blockly.Msg.HUMANOID_H1, '10'],
                            [Blockly.Msg.HUMANOID_H2, '11'],
                            [Blockly.Msg.HUMANOID_A1, '0'],
                            [Blockly.Msg.HUMANOID_A2, '1'],
                            [Blockly.Msg.HUMANOID_A3, '2'],
                            [Blockly.Msg.HUMANOID_A4, '3'],
                            [Blockly.Msg.HUMANOID_A5, '4'],
                            [Blockly.Msg.HUMANOID_B1, '6'],
                            [Blockly.Msg.HUMANOID_B2, '7'],
                            [Blockly.Msg.HUMANOID_B3, '8'],
                            [Blockly.Msg.HUMANOID_C1, '12'],
                            [Blockly.Msg.HUMANOID_C2, '13'],
                            [Blockly.Msg.HUMANOID_C3, '14'],
                            [Blockly.Msg.HUMANOID_D1, '18'],
                            [Blockly.Msg.HUMANOID_D2, '19'],
                            [Blockly.Msg.HUMANOID_D3, '20'],
                            [Blockly.Msg.HUMANOID_D4, '21'],
                            [Blockly.Msg.HUMANOID_D5, '22']]
                    },
                    {
                        type: 'input_value',
                        name: 'N'
                    },
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    return Blockly;
}

exports = addBlocks;
